import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";

//redux
import { RootState } from "../redux/store";

//component
import Card from "../components/card";
import { httpPostDetectFace } from "../requests/image";

export default function PgHome() {
  const [imageUrl, setimageUrl] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user);

  function handleSubmit() {
    httpPostDetectFace({ imageUrl }).then((response) => {
      console.log(response.data);
    });
  }

  return (
    <div className="pg-home d-flex flex-column">
      <p className="display-4 text-center m-3">
        <strong>
          {`This Magic Brain will detect faces in your pictures. Give it a try!`}
        </strong>
      </p>
      <div className="d-flex w-100">
        <Card.Container>
          <div className="d-flex m-3">
            <input
              className="m-1"
              style={{ flex: 1 }}
              type="url"
              placeholder="paste your image url here..."
              onChange={(e) => {
                setimageUrl(e.target.value);
              }}
            />
            <Button
              className="align-self-center m-1"
              variant="primary"
              size="lg"
              onClick={() => handleSubmit()}
            >
              Detect
            </Button>
          </div>
        </Card.Container>
      </div>
    </div>
  );
}
