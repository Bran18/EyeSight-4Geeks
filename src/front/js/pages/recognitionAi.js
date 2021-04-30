import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

const RecognitionAi = () => {
	const [url, setUrl] = useState("");
	const { store, actions } = useContext(Context);

	const handlerClick = e => {
		if (e.key === "Enter") {
			e.preventDefault();
			actions.setUrl({
				url: url
			});
		}
	};
	return (
		<div>
			<div className="ai">
				<div className="jumbotron">
					<h1 className="text-left display-4">eSight Recognition AI Model</h1>
					<p className="text-justify lead">
						Recognize over 11,000 different concepts including objects, themes, moods, and more. This model
						is a great all-purpose solution for most visual recognition needs.
					</p>
					<hr className="text-center my-4" />
					<p className="text-justify my-4">
						The eSight AI returns a list of concepts and the translation to spanish
					</p>
				</div>
				<div>
					<div className="container">
						<form className="align-items-center" style={{ width: "500px", height: "100px" }}>
							<div className="mb-3">
								<label className="form-label">Try your image</label>
								<input
									value={url}
									onChange={e => setUrl(e.target.value)}
									onKeyPress={e => handlerClick(e)}
									type="text"
									className="form-control"
									placeholder="Copy your link here."
								/>
							</div>
						</form>
					</div>

					<div className="container recongnition_section">
						<div className="row">
							<div
								className="col-lg-6 mt-5"
								style={{ width: "500px", height: "650px", paddingLeft: "50px" }}>
								<img src={url} className="img-fluid" />
							</div>
							<div className="col-lg-3 mt-2 mb-2">
								<ul className="list-group overflow-auto">
									{store.apiResults.map(element => (
										<li
											className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
											key={element}>
											{element}
										</li>
									))}
								</ul>
							</div>
							<div className="col-lg-3 mt-2 mb-2">
								<ul className="list-group overflow-auto">
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
			</div>
		</div>
	);
};

export default RecognitionAi;
