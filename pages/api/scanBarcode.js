
export default async function handler(req, res) {
  const { barcodeId, winningNumber } = req.body;

  // Find the bet information for the given barcode ID
  const { db } = await connectToDatabase();
  const collection = db.collection('barcodes');
  const barcode = await collection.findOne({ _id: barcodeId });

  if (!barcode) {
    return res.status(400).json({ error: 'Invalid barcode ID' });
  }

  // Check if the winning number matches any of the number bets in the bet information
  const { numberBets, userId } = barcode.bet;
  const winningAmount = numberBets[winningNumber] || 0;

  if (winningAmount > 0) {
    // Update the user's balance if there's a match
    const { db } = await connectToDatabase();
    const users = db.collection('users');
    const result = await users.findOneAndUpdate(
      { _id: userId },
      { $inc: { balance: winningAmount * 11 } },
      { returnOriginal: false }
    );

    // Return the updated user information
    res.status(200).json({ user: result.value });
  } else {
    res.status(200).json({ message: 'No winning bets for the given barcode ID and winning number' });
  }
}
