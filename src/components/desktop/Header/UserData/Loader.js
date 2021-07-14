import React, {useEffect, useState} from 'react';
import {getGameInitialDuration, getKenoType} from '../../../helpers/game';
import {connect} from 'react-redux';
import {getSecondTillDraw} from '../../../redux/actions/dataActions';
import {resetIsFetching, setIsFetching} from '../../../redux/actions/isFetchingActions';
import {mathTime} from "../../../constants/game"


const Loader = ({secTillDraw, isFetching, setIsFetching, resetIsFetching, getSecondTillDraw}) => {

  const [loaderWidth, setLoaderWidth] = useState(0);
  const [loaderDuration, setLoaderDuration] = useState(secTillDraw);

  useEffect(() => {
    (async () => {
      setIsFetching();
      const sec = await getSecondTillDraw(getKenoType());
      setLoaderWidth(getLoaderWidth(sec));
      setLoaderDuration(sec);
      resetIsFetching();
    })();
  }, []);

  useEffect(() => {
    setLoaderWidth(getLoaderWidth(secTillDraw));
    setLoaderDuration(secTillDraw-mathTime);
  }, [secTillDraw]);

  return (<div className="loader">
    <div className="loader__background">
      {!isFetching && <div className="loader__percent"
                           style={{animation: `loader ${loaderDuration}s linear forwards`, width: loaderWidth + '%'}}
      />}
    </div>
  </div>);
};

function getLoaderWidth(secTillDraw) {
  const initialTime = getGameInitialDuration();
  return (initialTime - secTillDraw) * 100 / initialTime;
}

const mapStateToProps = ({secTillDrawReducer, isFetching}) => ({
  secTillDraw: secTillDrawReducer, isFetching
});

const mapDispatchToProps = {
  setIsFetching,
  resetIsFetching,
  getSecondTillDraw
};

export default connect(mapStateToProps, mapDispatchToProps)(Loader);