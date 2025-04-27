// Minor update to trigger Vercel redeploy
export default function handler(req, res) {
  const { text } = req.body;

  const modelMatch = text.match(/Printer Model:\s*(.*?)\s*SKUs:/i);
  const skuMatch = text.match(/SKUs:\s*(.*)/i);

  let printerModel = modelMatch ? modelMatch[1].trim() : "";
  let skuList = skuMatch ? skuMatch[1].trim() : "";

  // Clean up any stray | characters at the end of printer model
  if (printerModel.endsWith("|")) {
    printerModel = printerModel.slice(0, -1).trim();
  }

  res.status(200).json({
    printer_model: printerModel,
    sku_list: skuList
  });
}
