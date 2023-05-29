module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      clubhomename: {
        type: String,
      },
      clubawayname: {
        type: String,
      },
      score: {
        type: [String],
      },
      clubname: {
        type: String,
      },
      points: {
        type: Number,
      },
      standing: {
        type: Number,
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

  return mongoose.model("football", schema);
};
