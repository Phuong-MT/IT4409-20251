document.getElementById("download-pdf").addEventListener("click", async () => {
    const elemet = document.getElementById("root");

    const { jsPDF } = window.jspdf;
    const docPDF = new jsPDF({
        orientation: "p",
        unit: "pt",
        format: "a4",
    });

    // ✅ lấy toàn bộ style hiện có trong <head>
    const headStyles = Array.from(
        document.querySelectorAll("style, link[rel='stylesheet']")
    )
        .map((n) => n.outerHTML)
        .join("\n");

    // ✅ tạo iframe ẩn để render
    const iframe = document.createElement("iframe");
    Object.assign(iframe.style, {
        position: "fixed",
        right: "0",
        bottom: "0",
        width: "0",
        height: "0",
        border: "0",
        visibility: "hidden",
    });
    document.body.appendChild(iframe);

    const frameDoc = iframe.contentDocument || iframe.contentWindow.document;
    frameDoc.open();
    frameDoc.write(`
      <html>
        <head>${headStyles}</head>
        <body><div id="printArea">${elemet.outerHTML}</div></body>
      </html>
    `);
    frameDoc.close();

    // Chờ iframe render
    await new Promise((res) => setTimeout(res, 300));

    const printArea = frameDoc.getElementById("printArea");

    await docPDF.html(frameDoc, {
        callback: (pdf) => {
            pdf.save(`${docName}.pdf`);
            iframe.remove();
        },
        margin: [20, 20, 20, 20],
        autoPaging: "text",
        html2canvas: {
            scale: 1,
            useCORS: true,
            logging: false,
            backgroundColor: "#ffffff",
        },
        x: 0,
        y: 0,
        width: docPDF.internal.pageSize.getWidth() - 40,
        windowWidth: printArea.scrollWidth,
    });
    console.log(printArea);
});
