const sample = (req, res) => {
  console.log('empty function works')
  res.status(200).json({"message": "Hello, World!"})
};

export default sample;
