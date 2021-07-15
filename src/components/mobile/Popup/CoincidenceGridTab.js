import React from 'react';
import {forMap} from '../../helpers/general';
import {MATCH_GRID} from '../../constants/game';
import { useLanguageData } from '../../Context/LanguageContext';

const ROW_LENGTH = 11;

function CoincidenceGridTab() {

	const languageData = useLanguageData()

	return (
		<div className="popup__tabs-container popup__tabs-container--table active">
			<div className="popup__title">{languageData['paymentTitle']}</div>
			<table className="table-coincidence">
				<tbody>
					<tr className="table-coincidence__tr table-coincidence__tr--th">
						{forMap(ROW_LENGTH, index => <th className="table-coincidence__td" key={index}>{!!index && index}</th>)}
					</tr>
					{forMap(ROW_LENGTH, index => <tr className="table-coincidence__tr" key={index}>{createCoincidenceRow(index)}</tr>)}
				</tbody>
			</table>
		</div>
	);
}

function createCoincidenceRow(firstCellValue) {
  return forMap(ROW_LENGTH, (i) => {
    const innerValue = !i ? firstCellValue : MATCH_GRID[i][firstCellValue];
    return <td className="table-coincidence__td" key={i}>{innerValue}</td>;
  });
}

export default CoincidenceGridTab;
