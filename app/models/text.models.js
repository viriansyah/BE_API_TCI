module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      first_word: {
        type: String,
        required: true,
      },
      second_word: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;

    return object;
  });

  return mongoose.model("word", schema);
};
