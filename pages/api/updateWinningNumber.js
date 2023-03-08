import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const { drawTime, couponNum } = req.body;
  const resultsPath = path.join(process.cwd(), 'data', 'results.json');

  try {
    // Read the existing results from the file
    const existingResults = JSON.parse(fs.readFileSync(resultsPath, 'utf-8'));

    // Find the index of the document with the matching draw time
    const index = existingResults.findIndex((doc) => doc.drawTime === drawTime);

    // If the index is -1, the draw time wasn't found
    if (index === -1) {
      res.status(400).json({ message: `No results found for draw time ${drawTime}` });
      return;
    }

    // Update the existing document with the new coupon number
    existingResults[index].couponNum = couponNum;

    // Write the updated results to the file
    const jsonData = JSON.stringify(existingResults, null, 2);
    fs.writeFileSync(resultsPath, jsonData, 'utf-8');

    console.log(`Result for draw time ${drawTime} updated successfully`);
    res.status(200).json({ message: `Result for draw time ${drawTime} updated successfully` });
  } catch (err) {
    console.log('Error updating result:', err);
    res.status(500).json({ message: 'Error updating result' });
  }
}
