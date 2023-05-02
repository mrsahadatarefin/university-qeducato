import clientPromise from "../../lib/MongoDB";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("Qeucato");

    const course = await db.collection("courses").find({}).toArray();
    res.json(course);
  } catch (e) {
    console.error(e);
  }
};
