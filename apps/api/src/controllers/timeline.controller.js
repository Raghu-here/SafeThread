
import PDFDocument from "pdfkit";
import prisma from '../lib/prisma.js';


export const getTimeline = async (req, res) => {
  try {
    const userId = req.user.userId;
    const memories = await prisma.memoryCard.findMany({
      where: { userId },
      include: {
        tags: { include: { tag: true } }
      },
      orderBy: [
      { eventDate: "asc" },
      { eventTime: "asc" },
      { submittedAt: "asc" }]

    });

    res.json(memories);
  } catch (error) {
    res.status(500).json({ message: "We're having trouble building your timeline." });
  }
};

export const exportTimelinePDF = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await prisma.user.findUnique({ where: { id: userId } });
    const memories = await prisma.memoryCard.findMany({
      where: { userId },
      orderBy: [
      { eventDate: "asc" },
      { eventTime: "asc" },
      { submittedAt: "asc" }]

    });

    const doc = new PDFDocument({ margin: 50 });
    let filename = `SafeThread_Timeline_${new Date().toISOString()}.pdf`;

    res.setHeader("Content-disposition", `attachment; filename="${filename}"`);
    res.setHeader("Content-type", "application/pdf");

    doc.pipe(res);

    // Cover Page
    doc.fontSize(25).font("Times-Roman").text("SafeThread Memory Timeline", { align: "center" });
    doc.moveDown();
    doc.fontSize(12).text(`Prepared for: ${user?.email}`, { align: "center" });
    doc.text(`Generated on: ${new Date().toLocaleString()}`, { align: "center" });
    doc.moveDown(2);

    // Content
    memories.forEach((memory, index) => {
      doc.fontSize(14).font("Times-Bold").text(`Memory #${index + 1}`);
      doc.fontSize(10).font("Courier").text(`Submitted: ${memory.submittedAt.toLocaleString()}`);
      doc.text(`Hash: ${memory.hash}`);
      doc.moveDown(0.5);

      const dateStr = memory.eventDate ? memory.eventDate.toDateString() : "Undated";
      const timeStr = memory.eventTime || "Time not specified";
      doc.fontSize(12).font("Times-Italic").text(`Event Context: ${dateStr} - ${timeStr}`);
      doc.moveDown(0.5);

      doc.fontSize(12).font("Times-Roman").text(memory.content);
      doc.moveDown(2);

      if (doc.y > 650) doc.addPage();
    });

    doc.end();
  } catch (error) {
    res.status(500).json({ message: "We're having trouble creating your document." });
  }
};