import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Pirates.module.css";
import { useParams, Link } from "react-router-dom";

export default () => {
	const { id } = useParams();
	const [pirate, setPirate] = useState([]);
	const [data, setData] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const [updated, setUpdated] = useState(false);

	useEffect(() => {
		axios
			.get(`http://localhost:8000/pirates/${id}`)
			.then((res) => {
				setPirate(res.data);
				setData(!data);
			})
			.catch((err) => console.log(err));
	}, [updated]);

	useEffect(() => {
		convert(pirate);
		setLoaded(true);
	}, [data]);

	const convert = (pirate) => {
		const newPirate = { ...pirate };
		console.log(newPirate);
		if (newPirate.pegLeg == true) {
			newPirate.pegLeg = "yes";
		} else {
			newPirate.pegLeg = "no";
		}
		if (newPirate.eyePatch == true) {
			newPirate.eyePatch = "yes";
		} else {
			newPirate.eyePatch = "no";
		}
		if (newPirate.hook == true) {
			newPirate.hook = "yes";
		} else {
			newPirate.hook = "no";
		}
		setPirate(newPirate);
	};

	const featureChange = (e) => {
		let feature = e.target.name;
		let updatedPirate = { ...pirate };
		updatedPirate.eyePatch == "yes"
			? (updatedPirate.eyePatch = true)
			: (updatedPirate.eyePatch = false);
		updatedPirate.pegLeg == "yes"
			? (updatedPirate.pegLeg = true)
			: (updatedPirate.pegLeg = false);
		updatedPirate.hook == "yes"
			? (updatedPirate.hook = true)
			: (updatedPirate.hook = false);
		if (e.target.name == "hook") {
			updatedPirate.hook = !updatedPirate.hook;
		}
		if (e.target.name == "pegLeg") {
			updatedPirate.pegLeg = !updatedPirate.pegLeg;
		}
		if (e.target.name == "eyePatch") {
			updatedPirate.eyePatch = !updatedPirate.eyePatch;
		}
		console.log("updatedPirate", updatedPirate);
		axios
			.put(`http://localhost:8000/pirates/${id}`, updatedPirate)
			.then((res) => {
				console.log("res", res);
				setUpdated(!updated);
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<div className={styles.header}>
				<h2>{pirate.name}</h2>
				<div className={styles.fixedNav}>
					<Link to={`/pirates/edit/${id}`}>
						<button>Edit Pirate</button>
					</Link>
					<Link to={`/pirates`}>
						<button>Home</button>
					</Link>
				</div>
			</div>
			{loaded ? (
				<div className={styles.pirateViewBG}>
					<div className={styles.container}>
						<div className={styles.pirateViewContent}>
							<div className={styles.containerLeft}>
								<img
									className={styles.pirateView_img}
									src={pirate.img}
									alt="Picture of a pirate"
								/>
								<h2 className={styles.phrase}>"{pirate.phrase}"</h2>
							</div>
							<div className={styles.containerRight}>
								<h3>About</h3>
								<table>
									<tr>
										<td>Position:</td>
										<td>{pirate.position}</td>
									</tr>
									<tr>
										<td>Treasures 🪙 :</td>
										<td>{pirate.chests}</td>
									</tr>
									<tr>
										<td>Peg Leg:</td>
										<td>
											<button name="pegLeg" onClick={featureChange}>
												{pirate.pegLeg}
											</button>
										</td>
									</tr>
									<tr>
										<td>Eye Patch:</td>
										<td>
											<button name="eyePatch" onClick={featureChange}>
												{pirate.eyePatch}
											</button>
										</td>
									</tr>
									<tr>
										<td>Hook Hand:</td>
										<td>
											<button name="hook" onClick={featureChange}>
												{pirate.hook}
											</button>
										</td>
										<td></td>
									</tr>
								</table>
							</div>
						</div>
					</div>
				</div>
			) : (
				""
			)}
		</>
	);
};
