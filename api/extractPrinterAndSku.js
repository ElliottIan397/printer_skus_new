export default function handler(req, res) {
  const { text } = req.body || {}; // ← safely handle if body is undefined

  if (!text) {
    return res.status(400).json({ error: "Missing text in request body" });
  }

  const modelMatch = text.match(/Printer Model:\s*(.*?)\s*SKUs:/i);
  const skuMatch = text.match(/SKUs:\s*(.*)/i);

  const printerModel = modelMatch ? modelMatch[1].trim() : "";
  const skuList = skuMatch ? skuMatch[1].trim() : "";

  res.status(200).json({
    printer_model: printerModel,
    sku_list: skuList
  });
}
