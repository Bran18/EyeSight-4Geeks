import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

const RecognitionAi = () => {
	const [url, setUrl] = useState("");
	const { store, actions } = useContext(Context);

	const handlerClick = e => {
		e.preventDefault();
		actions.setUrl({
			url: url
		});
	};
	return (
		<div>
			<div>
				<div className="jumbotron">
					<h1 className="text-center display-4">Image Recognition AI Model</h1>
					<p className="text-center lead">
						Recognize over 11,000 different concepts including objects, themes, moods, and more. This model
						is a great all-purpose solution for most visual recognition needs.
					</p>
					<hr className="text-center my-4" />
					<p className="text-center my-4">
						The Predict API returns a list of concepts with corresponding probability scores on the
						likelihood that these concepts are present within the image.
					</p>
				</div>
				<div>
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-8" style={{ width: "600px", height: "650px", paddingLeft: "50px" }}>
								<h2 className="text-center">Image for Recognition Ai</h2>
								<img src={url} className="img-fluid" />
							</div>
							<div className="col-lg-2">
								<ul className="list-group">
									{store.apiResults.map(element => (
										<li
											className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
											key={element}>
											{element}
										</li>
									))}
								</ul>
							</div>
							<div className="col-lg-2">
								<ul className="list-group">
									{store.googleResults.map(element => (
										<li
											className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
											key={element}>
											{element}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<form className="align-items-center" style={{ width: "500px", height: "250px" }}>
						<div className="mb-3">
							<label className="form-label">Try your own image.</label>
							<input
								value={url}
								onChange={e => setUrl(e.target.value)}
								type="text"
								className="form-control"
								placeholder="Copy your link here."
							/>
						</div>
						<button type="submit" onClick={e => handlerClick(e)} className="btn btn-primary  mr-3 mb-3">
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default RecognitionAi;
