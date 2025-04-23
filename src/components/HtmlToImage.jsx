import React, { forwardRef, useImperativeHandle, useRef } from "react";
import html2canvas from "html2canvas";
import { useAddCartContext } from "../context/AddCartContext";

const HtmlToImage = forwardRef((props,ref) =>{
  const contentRef = useRef();

  const { cartdata } = useAddCartContext();
  const totalMrp = cartdata.reduce((acc, item) => acc + Number(item.mrp), 0);
  const totalPrice = cartdata.reduce((acc, item) => acc + Number(item.sellingprice), 0);
  const totalDiscount = totalMrp - totalPrice;

  const renderInCleanFrame = async (element) => {
    return new Promise((resolve) => {
      const iframe = document.createElement("iframe");
      iframe.style.position = "absolute";
      iframe.style.left = "-9999px";
      iframe.style.top = "-9999px";
      iframe.style.width = "1000px";
      iframe.style.height = "1000px";
      document.body.appendChild(iframe);

      const doc = iframe.contentDocument || iframe.contentWindow.document;
      doc.open();
      doc.write("<!DOCTYPE html><html><head></head><body></body></html>");
      doc.close();

      const cloned = element.cloneNode(true);
      doc.body.appendChild(cloned);

      setTimeout(async () => {
        const canvas = await html2canvas(cloned, {
          backgroundColor: "#ffffff",
        });
        document.body.removeChild(iframe);
        resolve(canvas);
      }, 0);
    });
  };

  const handleDownload = async () => {
    const canvas = await renderInCleanFrame(contentRef.current);
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = `${props.customerdata.name+"-"+props.customerdata.district}.png`;
    link.click();
  };

  const handleShare = async () => {
    const canvas = await renderInCleanFrame(contentRef.current);
    
    // Convert canvas to blob
    canvas.toBlob(async (blob) => {
      const file = new File([blob], `${props.customerdata.name}-${props.customerdata.district}.png`, {
        type: "image/png",
      });
  
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            files: [file],
            title: "Customer Bill",
            text: "Here is the bill image from my app",
          });
          console.log("Shared successfully!");
        } catch (err) {
          console.error("Error sharing:", err);
        }
      } else {
        alert("Sharing not supported on this device/browser.");
      }
    }, "image/png");
  };
  

  useImperativeHandle(ref, () => ({
    downloadImage: handleShare,
    sharbill:handleShare
  }));

  return (
    <div style={{ padding: "16px", textAlign: "center" }}>
      <div
        ref={contentRef}
        style={{
          backgroundColor: "#ffffff",
          color: "#000000",
          padding: "20px",
          borderRadius: "12px",
          border: "1px solid #ddd",
          maxWidth: "800px",
          margin: "0 auto",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* ✅ Styled Table */}
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: "16px",
            fontSize: "14px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th style={cellHeadStyle}>Product Name</th>
              <th style={cellHeadStyle}>Quantity</th>
              <th style={cellHeadStyle}>MRP</th>
              <th style={cellHeadStyle}>Discount</th>
              <th style={cellHeadStyle}>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartdata.map((data, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #ccc" }}>
                <td style={cellStyle}>{data.heading}</td>
                <td style={cellStyle}>
                  {data.weight} {data.isweightproduct ? "Kg" : ""}
                </td>
                <td style={cellStyle}>{data.mrp}</td>
                <td style={cellStyle}>
                  {(((data.mrp - data.sellingprice) / data.mrp) * 100).toFixed(2)}%
                </td>
                <td style={cellStyle}>{data.sellingprice}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ✅ Total Summary */}
        <div style={{ textAlign: "right", marginBottom: "16px", fontSize: "14px" }}>
          <p><strong>Total MRP:</strong> ₹{totalMrp.toFixed(2)}</p>
          <p><strong>Total Discount:</strong> ₹{totalDiscount.toFixed(2)}</p>
          <p><strong>Final Price:</strong> ₹{totalPrice.toFixed(2)}</p>
        </div>

        {/* ✅ Customer Info */}
        {props.customerdata && (
          <>
            <h2
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                marginBottom: "4px",
                borderTop: "1px solid #ddd",
                paddingTop: "10px",
              }}
            >
              My Address
            </h2>
            <div style={{ fontSize: "14px", textAlign: "left" }}>
              <p><strong>Name:</strong> {props.customerdata.name}</p>
              <p><strong>Phone:</strong> {props.customerdata.phone}</p>
              <p><strong>Email:</strong> {props.customerdata.email}</p>
              <p><strong>Address:</strong> {props.customerdata.address}</p>
              <p><strong>City:</strong> {props.customerdata.city}</p>
              <p><strong>District:</strong> {props.customerdata.district}</p>
              <p><strong>State:</strong> {props.customerdata.state}</p>
              <p><strong>Pincode:</strong> {props.customerdata.pincode}</p>
            </div>
          </>
        )}
      </div>

      {/* ✅ Download Button */}
      {/* <div style={{ marginTop: "20px" }}>
        <button onClick={handleDownload} style={buttonStyle}>
          Download as Image
        </button>
      </div> */}
    </div>
  );
})

const cellHeadStyle = {
  padding: "8px",
  border: "1px solid #ccc",
  textAlign: "left",
  fontWeight: "bold",
};

const cellStyle = {
  padding: "8px",
  border: "1px solid #ccc",
  textAlign: "left",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#28a745",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "14px",
};

export default HtmlToImage;
