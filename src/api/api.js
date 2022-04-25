import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "65a3206fd009407f9acdd7fdeabdc162",
});

export const handleImageSearch = async (image) => {
  try {
    const data = app.models.predict(Clarifai.FACE_DETECT_MODEL, image);
    return data;
  } catch (err) {
    console.log(err);
  }
};
