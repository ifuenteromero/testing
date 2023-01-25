import React, { useEffect, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import ScoopOption from "./ScoopOptions";

const Options = ({ optionType }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:3030/${optionType}`)
			.then((response) => {
				console.log({ response });
				setItems(response.data);
			})
			.catch((error) => {});
	}, [optionType]);

	const ItemComponent = optionType === "scoops" ? ScoopOption : null;
	const optionItems = items.map((item) => (
		<ItemComponent key={item.name} {...item} />
	));

	return <Row>{optionItems}</Row>;
};

export default Options;
