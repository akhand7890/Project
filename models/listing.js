const listingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { filename: String, url: String },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  country: { type: String, required: true },
  isBooked: { type: Boolean, default: false },
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  geometry: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: { type: [Number], required: true },
  },
});
