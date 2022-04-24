import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Particles from "react-particles-js";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import Spinner from "./components/Spinner/Spinner";
const particlesOptions = {
  particles: {
    number: {
      value: 147,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

const initialState = {
  input: "",
  imageUrl: "",
  box: {},
  route: "signin",
  isSignedIn: false,
  isFetchingImage: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    if (image.height > 0) {
      console.log(image);
      const width = Number(image.width);
      const height = Number(image.height);
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - clarifaiFace.right_col * width,
        bottomRow: height - clarifaiFace.bottom_row * height,
      };
    } else {
      setTimeout(() => {
        this.displayFaceBox(this.calculateFaceLocation(data));
      }, 1000);
      return {};
    }
  };

  displayFaceBox = (box) => {
    this.setState({ box: box });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = async () => {
    try {
      if (!this.state.isFetchingImage) {
        this.setState({ isFetchingImage: true });
        this.setState({ imageUrl: this.state.input });
        const response = await fetch(
          "https://floating-ravine-20611.herokuapp.com/imageurl",
          {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              input: this.state.input,
            }),
          }
        );
        const data = await response.json();

        if (data !== "unable to work with API") {
          const imageResponse = await fetch(
            "https://floating-ravine-20611.herokuapp.com/image",
            {
              method: "put",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                id: this.state.user.id,
              }),
            }
          );
          const count = await imageResponse.json();
          this.setState(Object.assign(this.state.user, { entries: count }));
          this.setState({ isFetchingImage: false });
          console.log(data);
        } else {
          this.setState({ isFetchingImage: false });
        }
        return data;
        // .then((nextResponse) => {
        //   console.log(this.state);
        //   console.log(nextResponse);
        // })
        // .catch((err) => console.log(err));
      }
    } catch (err) {
      console.log(err);
    }
  };

  onHandleSubmitImage = async () => {
    const imageResp = await this.onButtonSubmit();
    console.log(this.state);
    console.log(imageResp);
    this.displayFaceBox(this.calculateFaceLocation(imageResp));
  };

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState(initialState);
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {route === "home" ? (
          <div>
            <Logo />
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onHandleSubmitImage}
            />
            {this.state.isFetchingImage ? (
              <div
                style={{
                  height: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Spinner />
              </div>
            ) : (
              <FaceRecognition box={box} imageUrl={imageUrl} />
            )}
          </div>
        ) : route === "signin" ? (
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    );
  }
}

export default App;
