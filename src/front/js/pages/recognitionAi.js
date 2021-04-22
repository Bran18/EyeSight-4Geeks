import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

const RecognitionAi = () => {
	const [url, setUrl] = useState([]);
	const { store, actions } = useContext(Context);

	const handlerClick = e => {
		e.preventDefault();
		actions.setUrl({
			url: url
		});
	};
	console.log("datos=", url);
	return (
		<div>
			<div>
				<div className="jumbotron">
					<h1 className="display-4">Image Recognition AI Model</h1>
					<p className="lead">
						Recognize over 11,000 different concepts including objects, themes, moods, and more. This model
						is a great all-purpose solution for most visual recognition needs.
					</p>
					<hr className="my-4" />
					<p>
						The Predict API returns a list of concepts with corresponding probability scores on the
						likelihood that these concepts are present within the image.
					</p>
				</div>
				<div>
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg">
								<div className="embed-responsive embed-responsive-16by9">
									<iframe className="embed-responsive-item" src={url} />
								</div>
							</div>
							<div className="col-lg">
								<ul className="list-group">
									{actions.url}
									<li className="list-group-item d-flex justify-content-between align-items-center" />
								</ul>
							</div>
							<div className="col-lg">Language</div>
						</div>
					</div>
				</div>
				<div className="container">
					<form>
						<div className="mb-3">
							<label className="form-label">Try your own image or video</label>
							<input
								value={url}
								onChange={e => setUrl(e.target.value)}
								type="text"
								className="form-control"
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
