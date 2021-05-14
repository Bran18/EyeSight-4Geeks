import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import ScrollAnimation from "react-animate-on-scroll";

const RecognitionAi = () => {
	const [url, setUrl] = useState("");
	const [favorite, setFavorite] = useState("false");
	const [language, setLanguage] = useState("en");
	const [transLan, setTransLan] = useState("es");
	const { store, actions } = useContext(Context);

	const handlerClickRandom = e => {
		e.preventDefault();
		fnUrl();
	};

	const setFavoriteTrue = () => {
		setFavorite(true);
		console.log("favorito es", favorite);
	};
	const setFavoriteFalse = () => {
		setFavorite(false);
		console.log("favorito es", favorite);
	};

	const handlerClick = e => {
		e.preventDefault();
		actions.setUrl2({
			url: url
		});
		actions.setUrl({
			url: store.url,
			language: language,
			transLan: transLan
		});
	};
	async function fnUrl() {
		const response = await fetch(
			"https://loremflickr.com/api/1/?token=1395.DETPaUWrFhDwBAxDWycZojNmTZafLhhR&width=500&height=400&format=json"
		)
			.then(res => res.json())
			.then(data => {
				actions.setUrl2({
					url: data.file
				});
				actions.setUrl({
					url: data.file,
					language: language,
					transLan: transLan
				});
			})
			.catch(err => console.error(err));
	}
	useEffect(() => {
		actions.setUrl();
	});
	return (
		<div>
			<div className="ai">
				<ScrollAnimation animateIn="fadeIn" duration="2" animateOnce="true">
					<div className="jumbotron">
						<h1 className="text-left display-4">Ready to get started? eSight Recognition AI Model</h1>
						<p className="text-justify lead">
							One of the easiest ways to ensure that learners store information in their long-term memory
							is to pair concepts with meaningful images.
						</p>
						<hr className="text-center my-4" />
						<p className="text-justify my-4">
							The eSight AI returns a list of concepts and the translation to your desire language
						</p>
					</div>
				</ScrollAnimation>
				<div>
					<div className="container">
						<form className="align-items-center" style={{ width: "500px", height: "100px" }}>
							<div className="mb-3">
								<label className="form-label">Try your image</label>
								<input
									value={url}
									onChange={e => setUrl(e.target.value)}
									type="text"
									className="form-control"
									placeholder="Copy your link here."
								/>
							</div>
						</form>

						<div className="row row-cols-6">
							<div className="col">
								<div className="form-group">
									<label className="exampleFormControlSelect1"> Desire Language </label>
									<select
										className="form-control"
										id="exampleFormControlSelect1"
										onChange={e => setLanguage(e.target.value)}>
										<option value={"en"}>English</option>
										<option value={"es"}>Spanish</option>
										<option value={"pt"}>Portuguese</option>
										<option value={"it"}>Italian</option>
										<option value={"fr"}>French</option>
										<option value={"tr"}>Turkish</option>
										<option value={"pl"}>Polish</option>
										<option value={"nl"}>Dutch</option>
										<option value={"de"}>German</option>
										<option value={"ru"}>Russian</option>
										<option value={"ar"}>Arabic</option>
										<option value={"ja"}>Japanese</option>
										<option value={"zh"}>Chinese (Simplified)</option>
									</select>
								</div>
							</div>
							<div className="col">
								<div className="form-group">
									<label className="exampleFormControlSelect1">Translated Language</label>
									<select
										className="form-control"
										id="exampleFormControlSelect1"
										onChange={e => setTransLan(e.target.value)}>
										<option value={"es"}>Spanish</option>
										<option value={"en"}>English</option>
										<option value={"pt"}>Portuguese</option>
										<option value={"it"}>Italian</option>
										<option value={"fr"}>French</option>
										<option value={"tr"}>Turkish</option>
										<option value={"pl"}>Polish</option>
										<option value={"nl"}>Dutch</option>
										<option value={"de"}>German</option>
										<option value={"ru"}>Russian</option>
										<option value={"ar"}>Arabic</option>
										<option value={"ja"}>Japanese</option>
										<option value={"zh"}>Chinese (Simplified)</option>
									</select>
								</div>
							</div>
						</div>
						<button
							onClick={e => handlerClick(e)}
							type="button"
							className="btn btn-primary btn-lg mr-3 mb-3">
							Go!
						</button>
						<button
							onClick={e => handlerClickRandom(e)}
							type="button"
							className="btn btn-success btn-lg mb-3">
							Feeling lucky
						</button>
					</div>
					<div className="container recongnition_section">
						<div className="row">
							<div
								className="col-lg-6 mt-5"
								style={{ width: "500px", height: "650px", paddingLeft: "50px" }}>
								<img src={store.url} className="img-fluid" />
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
											{favorite ? (
												<a
													className="btn btn-outline-warning text-warning btn-sm"
													onClick={() => setFavoriteFalse()}>
													<i className="fas fa-heart" />
												</a>
											) : (
												<a
													className="btn btn-outline-warning text-warning btn-sm"
													onClick={() => setFavoriteTrue()}>
													<i className="far fa-heart" />
												</a>
											)}
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
