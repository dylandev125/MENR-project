import React, { useState, useEffect, useMemo } from "react";
import {
  Checkbox,
  FormControlLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

// Parts
import Spinning from "./Spinning";

const FiltersSidebar = ({
  error,
  forManu,
  setForManu,
  forDiag,
  setForDiag,
  forRes,
  setForRes,
  forBright,
  setForBright,
  forInter,
  setForInter,
  forAngle,
  setForAngle,
  forTemp,
  setForTemp,
  forTouch,
  setForTouch,
  forFormat,
  setForFormat,
  forPower,
  setForPower,
  forSize,
  setForSize,
  forCont,
  setForCont,
  forOpt,
  setForOpt,
  setFiltercombination,
  filterCombination,
  initialFilters,
  pathname,
  noFilterResults,
  setIsNormal,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [parentFiltered, setParentFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [manuAgg, setManuAgg] = useState([]);
  const [diagonalAgg, setDiagonalAgg] = useState([]);
  const [resolAgg, setResolAgg] = useState([]);
  const [brightAgg, setBrightAgg] = useState([]);
  const [interAgg, setInterAgg] = useState([]);
  const [angleAgg, setAngleAgg] = useState([]);
  const [temperAgg, setTemperAgg] = useState([]);
  const [touchAgg, setTouchAgg] = useState([]);
  const [formatAgg, setFormatAgg] = useState([]);
  const [powerAgg, setPowerAgg] = useState([]);
  const [sizeAgg, setSizeAgg] = useState([]);
  const [contAgg, setContAgg] = useState([]);
  const [optAgg, setOptAgg] = useState([]);

  console.log()
  useEffect(() => {
    const NewCombination = () => {
      if (
        filterCombination.length > 0 &&
        (forManu.length > 0 ||
          forDiag.length > 0 ||
          forRes.length > 0 ||
          forBright.length > 0 ||
          forInter.length > 0 ||
          forAngle.length > 0 ||
          forTemp.length > 0 ||
          forTouch.length > 0 ||
          forFormat.length > 0 ||
          forPower.length > 0 ||
          forSize.length > 0 ||
          forCont.length > 0 ||
          forOpt.length > 0
          )
      ) {
        setParentFiltered(filterCombination.slice(1, filterCombination.length));
      } else {
        setParentFiltered([]);
      }
    };

    NewCombination();

    return () => {
      setParentFiltered([]);
    };
  }, [filterCombination, pathname, forManu.length]);

  useEffect(() => {
    if (initialFilters) {
      const manu =
        initialFilters && initialFilters.manufacturer
          ? initialFilters.manufacturer
              .sort((a, b) => a._id.localeCompare(b._id))
              .map((el) => el)
          : [];
      const diag =
        initialFilters && initialFilters.sizeDiagonal
          ? initialFilters.sizeDiagonal
              .sort((a, b) => a._id.localeCompare(b._id))
              .map((el) => el)
          : [];
      const reso =
        initialFilters && initialFilters.resolutionMax
          ? initialFilters.resolutionMax
              .sort((a, b) => a._id.localeCompare(b._id))
              .map((el) => el)
          : [];
      const brig =
        initialFilters && initialFilters.brightness
          ? initialFilters.brightness
              .sort((a, b) => a._id.localeCompare(b._id))
              .map((el) => el)
          : [];
      const inte =
        initialFilters && initialFilters.interface
          ? initialFilters.interface
              .sort((a, b) => a._id.title.localeCompare(b._id.title))
              .map((el) => el)
          : [];
      const angl =
        initialFilters && initialFilters.perspective
          ? initialFilters.perspective
              .sort((a, b) => a._id.localeCompare(b._id))
              .map((el) => el)
          : [];
      const temp =
        initialFilters && initialFilters.temperatureRange
          ? initialFilters.temperatureRange
              .sort((a, b) => a._id.title.localeCompare(b._id.title))
              .map((el) => el)
          : [];
      const touch =
        initialFilters && initialFilters.touch
          ? initialFilters.touch.sort((a, b) => a._id - b._id).map((el) => el)
          : [];
      const format =
        initialFilters && initialFilters.characteristics
          ? initialFilters.characteristics
              .sort((a, b) => a._id.title.localeCompare(b._id.title))
              .map((el) => el)
          : [];
      const power =
        initialFilters && initialFilters.powerSupply
          ? initialFilters.powerSupply
              .sort((a, b) => a._id.localeCompare(b._id))
              .map((el) => el)
          : [];
      const size =
        initialFilters && initialFilters.diagonale
          ? initialFilters.diagonale
              .sort((a, b) => a._id.localeCompare(b._id))
              .map((el) => el)
          : [];
      const cont =
        initialFilters && initialFilters.controller
          ? initialFilters.controller
              .sort((a, b) => a._id.title.localeCompare(b._id.title))
              .map((el) => el)
          : [];
      const opt =
        initialFilters && initialFilters.options
          ? initialFilters.options
              .sort((a, b) => a._id.title.localeCompare(b._id.title))
              .map((el) => el)
          : [];
      setLoading(false);

      const counts = inte.reduce((result, record) => {
        if (record._id.title in result) {
          result[record._id.title]++;
        } else {
          result[record._id.title] = 1;
        }

        return result;
      }, {});

      const tempinte = Object.keys(counts).map((val, k) => {
        return { id: k, _id: val, count: counts[val] };
      });

      const counts2 = opt.reduce((result, record) => {
        if (record._id.title in result) {
          result[record._id.title]++;
        } else {
          result[record._id.title] = 1;
        }

        return result;
      }, {});

      const tempinte2 = Object.keys(counts2).map((val, k) => {
        return { id: k, _id: val, count: counts2[val] };
      });

      console.log("OPTION AGG", opt);

      const counts3 = cont.reduce((result, record) => {
        if (record._id.title in result) {
          result[record._id.title]++;
        } else {
          result[record._id.title] = 1;
        }

        return result;
      }, {});

      const tempinte3 = Object.keys(counts3).map((val, k) => {
        return { id: k, _id: val, count: counts3[val] };
      });

      const counts4 = cont.reduce((result, record) => {
        if (record._id.title in result) {
          result[record._id.title]++;
        } else {
          result[record._id.title] = 1;
        }

        return result;
      }, {});

      const tempinte4 = Object.keys(counts4).map((val, k) => {
        return { id: k, _id: val, count: counts4[val] };
      });
      manu.length > 0 ? setManuAgg(manu) : setManuAgg([]);
      diag.length > 0 ? setDiagonalAgg(diag) : setDiagonalAgg([]);
      reso.length > 0 ? setResolAgg(reso) : setResolAgg([]);
      brig.length > 0 ? setBrightAgg(brig) : setBrightAgg([]);
      tempinte.length > 0 ? setInterAgg(tempinte) : setInterAgg([]);
      angl.length > 0 ? setAngleAgg(angl) : setAngleAgg([]);
      temp.length > 0 ? setTemperAgg(temp) : setTemperAgg([]);
      touch.length > 0 ? setTouchAgg(touch) : setTouchAgg([]);
      tempinte4.length > 0 ? setFormatAgg(tempinte4) : setFormatAgg([]);
      power.length > 0 ? setPowerAgg(power) : setPowerAgg([]);
      size.length > 0 ? setSizeAgg(size) : setSizeAgg([]);
      tempinte3.length > 0 ? setContAgg(tempinte3) : setContAgg([]);
      tempinte2.length > 0 ? setOptAgg(tempinte2) : setOptAgg([]);
    }
  }, [initialFilters, noFilterResults]);

  const handleChange = (panel) => (e, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const clickManu = (e) => {
    if (e.target.checked) {
      setForManu([...forManu, e.target.value]);
    } else {
      const newone = forManu.filter((x) => x !== e.target.value && x);
      setForManu(newone);
    }
  };

  const clickDiag = (e) => {
    if (e.target.checked) {
      setForDiag([...forDiag, e.target.value]);
    } else {
      const newone = forDiag.filter((x) => x !== e.target.value && x);
      setForDiag(newone);
    }
  };

  const clickRes = (e) => {
    if (e.target.checked) {
      setForRes([...forRes, e.target.value]);
    } else {
      const newone = forRes.filter((x) => x !== e.target.value && x);
      setForRes(newone);
    }
  };

  const clickBright = (e) => {
    if (e.target.checked) {
      setForBright([...forBright, e.target.value]);
    } else {
      const newone = forBright.filter((x) => x !== e.target.value && x);
      setForBright(newone);
    }
  };

  const clickInter = (e) => {
    if (e.target.checked) {
      setForInter([...forInter, e.target.value]);
    } else {
      const newone = forInter.filter((x) => x !== e.target.value && x);
      setForInter(newone);
    }
  };

  const clickAngle = (e) => {
    if (e.target.checked) {
      setForAngle([...forAngle, e.target.value]);
    } else {
      const newone = forAngle.filter((x) => x !== e.target.value && x);
      setForAngle(newone);
    }
  };

  const clickTemp = (e) => {
    if (e.target.checked) {
      setForTemp([...forTemp, e.target.value]);
    } else {
      const newone = forTemp.filter((x) => x !== e.target.value && x);
      setForTemp(newone);
    }
  };

  const clickTouch = (e) => {
    if (e.target.checked) {
      setForTouch([...forTouch, e.target.value]);
    } else {
      const newone = forTouch.filter((x) => x !== `${e.target.value}` && x);
      setForTouch(newone);
    }
  };

  const clickFormat = (e) => {
    if (e.target.checked) {
      setForFormat([...forFormat, e.target.value]);
    } else {
      const newone = forFormat.filter((x) => x !== `${e.target.value}` && x);
      setForFormat(newone);
    }
  };

  const clickPower = (e) => {
    console.log(e.target.value);
    if (e.target.checked) {
      setForPower([...forPower, e.target.value]);
    } else {
      const newone = forPower.filter((x) => x !== `${e.target.value}` && x);
      setForPower(newone);
    }
  };

  const clickSize = (e) => {
    if (e.target.checked) {
      setForSize([...forSize, e.target.value]);
    } else {
      const newone = forSize.filter((x) => x !== `${e.target.value}` && x);
      setForSize(newone);
    }
  };

  const clickCont = (e) => {
    if (e.target.checked) {
      setForCont([...forCont, e.target.value]);
    } else {
      const newone = forCont.filter((x) => x !== `${e.target.value}` && x);
      setForCont(newone);
    }
  };

  const clickOpt = (e) => {
    if (e.target.checked) {
      setForOpt([...forOpt, e.target.value]);
    } else {
      const newone = forOpt.filter((x) => x !== `${e.target.value}` && x);
      setForOpt(newone);
    }
  };
  useEffect(() => {
    var compare = [];
    manuAgg.forEach(
      (man) => forManu.includes(man._id) && compare.push(man._id)
    );

    if (compare.length > 0) {
      let manustored = JSON.stringify(compare);
      localStorage.setItem("manufacturers", manustored);
    } else {
      localStorage.setItem("manufacturers", "");
    }
  }, [forManu, manuAgg]);

  useEffect(() => {
    var compare = [];
    diagonalAgg.forEach(
      (dia) => forDiag.includes(dia._id) && compare.push(dia._id)
    );

    if (compare.length > 0) {
      let diagstored = JSON.stringify(compare);
      localStorage.setItem("diagonal", diagstored);
    } else {
      localStorage.setItem("diagonal", "");
    }
  }, [forDiag, diagonalAgg]);

  useEffect(() => {
    var compare = [];
    resolAgg.forEach(
      (res) => forRes.includes(res._id) && compare.push(res._id)
    );

    if (compare.length > 0) {
      let resstored = JSON.stringify(compare);
      localStorage.setItem("resolutions", resstored);
    } else {
      localStorage.setItem("resolutions", "");
    }
  }, [forRes, resolAgg]);

  useEffect(() => {
    var compare = [];
    brightAgg.filter(
      (birght) => forBright.includes(birght) && compare.push(birght._id)
    );

    if (compare.length > 0) {
      let birghtstored = JSON.stringify(compare);
      localStorage.setItem("brightness", birghtstored);
    } else {
      localStorage.setItem("brightness", "");
    }
  }, [forBright, brightAgg]);

  useEffect(() => {
    var compare = [];
    interAgg.filter(
      (inter) =>
        forInter.includes(inter._id.title) && compare.push(inter._id.title)
    );

    if (compare.length > 0) {
      let interstored = JSON.stringify(compare);
      localStorage.setItem("interface", interstored);
    } else {
      localStorage.setItem("interface", "");
    }
  }, [forInter, interAgg]);

  useEffect(() => {
    var compare = [];
    formatAgg.filter(
      (format) =>
        forFormat.includes(format._id.title) && compare.push(format._id.title)
    );

    if (compare.length > 0) {
      let formatstored = JSON.stringify(compare);
      localStorage.setItem("format", formatstored);
    } else {
      localStorage.setItem("format", "");
    }
  }, [forFormat, formatAgg]);

  useEffect(() => {
    console.log(powerAgg);
    var compare = [];
    powerAgg.filter(
      (power) => forPower.includes(power._id) && compare.push(power._id)
    );

    if (compare.length > 0) {
      let formatstored = JSON.stringify(compare);
      localStorage.setItem("power", formatstored);
    } else {
      localStorage.setItem("power", "");
    }
  }, [forPower, powerAgg]);

  useEffect(() => {
    var compare = [];
    sizeAgg.filter(
      (size) => forSize.includes(size._id) && compare.push(size._id)
    );

    if (compare.length > 0) {
      let sizestored = JSON.stringify(compare);
      localStorage.setItem("size", sizestored);
    } else {
      localStorage.setItem("size", "");
    }
  }, [forSize, sizeAgg]);

  useEffect(() => {
    var compare = [];
    contAgg.filter(
      (cont) => forCont.includes(cont._id.title) && compare.push(cont._id.title)
    );

    if (compare.length > 0) {
      let contstored = JSON.stringify(compare);
      localStorage.setItem("cont", contstored);
    } else {
      localStorage.setItem("cont", "");
    }
  }, [forCont, contAgg]);

  useEffect(() => {
    var compare = [];
    optAgg.filter(
      (opt) => forOpt.includes(opt._id.title) && compare.push(opt._id.title)
    );

    if (compare.length > 0) {
      let optstored = JSON.stringify(compare);
      localStorage.setItem("options", optstored);
    } else {
      localStorage.setItem("options", "");
    }
  }, [forOpt, optAgg]);

  useEffect(() => {
    var compare = [];
    angleAgg.filter(
      (angle) => forAngle.includes(angle._id) && compare.push(angle._id)
    );

    if (compare.length > 0) {
      let anglestored = JSON.stringify(compare);
      localStorage.setItem("angle", anglestored);
    } else {
      localStorage.setItem("angle", "");
    }
  }, [forAngle, angleAgg]);

  useEffect(() => {
    var compare = [];
    temperAgg.filter(
      (temp) => forTemp.includes(temp._id.title) && compare.push(temp._id.title)
    );

    if (compare.length > 0) {
      let tempstored = JSON.stringify(compare);
      localStorage.setItem("temperature", tempstored);
    } else {
      localStorage.setItem("temperature", "");
    }
  }, [forTemp, temperAgg]);

  useEffect(() => {
    var compare = [];

    touchAgg.map(
      (tch) => forTouch.includes(`${tch._id}`) && compare.push(tch._id)
    );

    if (compare.length > 0) {
      let touchstored = JSON.stringify(compare);
      localStorage.setItem("touchscreen", touchstored);
    } else {
      localStorage.setItem("touchscreen", "");
    }
  }, [forTouch, touchAgg]);

  const clearFilts = (e) => {
    e.preventDefault();
    setForManu([]);
    setForDiag([]);
    setForRes([]);
    setForBright([]);
    setForInter([]);
    setForAngle([]);
    setForTemp([]);
    setForTouch([]);
    setForFormat([]);
    setForPower([]);
    setForSize([]);
    setForCont([]);
    setIsNormal(true);
    setFiltercombination([]);
  };

  return (
    <div id="filters-container" className="filters-container">
      <div className="sidebar-title">
        <h4>Filter Products</h4> <br />
        {(forManu.length > 0 ||
          forDiag.length > 0 ||
          forRes.length > 0 ||
          forBright.length > 0 ||
          forInter.length > 0 ||
          forAngle.length > 0 ||
          forTemp.length > 0 ||
          forTouch.length > 0 ||
          forFormat.length > 0 ||
          forPower.length > 0 ||
          forSize.length > 0 ||
          forCont.length > 0) && (
          <div className="button-read-more">
            <button
              onClick={(e) => clearFilts(e)}
              className="apollo-button"
              style={{
                boder: "none",
                marginBottom: 20,
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
      {loading ? (
        <Spinning />
      ) : error && initialFilters.length === 0 ? (
        <p>Error loading options</p>
      ) : (
        <div className="sidebar-filters">
          {manuAgg && manuAgg.length > 0 && (
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<i className="fal fa-angle-down"></i>}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                Manufacturer
              </AccordionSummary>
              <AccordionDetails>
                <ul className="sidebar-options-container">
                  {manuAgg.map((pm, index) => (
                    <li key={index}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={forManu.includes(pm._id) ? true : false}
                            name={pm._id}
                            value={pm._id}
                            onClick={(e) => clickManu(e)}
                          />
                        }
                        label={pm._id}
                      />{" "}
                      {/*
                                            <span className='count-bullet'>
                                                {loading ? (
                                                    <Spinning />
                                                ) : parentFiltered.length >
                                                  0 ? (
                                                    parentFiltered
                                                        .map(
                                                            (cnt) =>
                                                                cnt.manufacturer &&
                                                                cnt.manufacturer
                                                                    .title ===
                                                                    pm._id
                                                        )
                                                        .reduce(
                                                            (result, index) => {
                                                                const number =
                                                                    index ===
                                                                    true
                                                                        ? 1
                                                                        : 0;

                                                                return (
                                                                    result +
                                                                    number
                                                                );
                                                            },
                                                            0
                                                        )
                                                ) : forManu.length === 0 ? (
                                                    pm.count
                                                ) : (
                                                    0
                                                )}
                                            </span>Dennis */}
                    </li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          )}
          {diagonalAgg && diagonalAgg.length > 0 && (
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<i className="fal fa-angle-down"></i>}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                Diagonal
              </AccordionSummary>
              <AccordionDetails>
                <ul className="sidebar-options-container">
                  {diagonalAgg.map((dg, index) => (
                    <li key={index}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={forDiag.includes(dg._id) ? true : false}
                            name={dg._id}
                            value={dg._id}
                            onClick={(e) => clickDiag(e)}
                          />
                        }
                        label={dg._id.replace(/^0+/, "")}
                      />
                      {/*
                                            <span className='count-bullet'>
                                                {loading ? (
                                                    <Spinning />
                                                ) : parentFiltered.length >
                                                  0 ? (
                                                    parentFiltered
                                                        .map(
                                                            (cnt) =>
                                                                cnt.sizeDiagonal &&
                                                                cnt.sizeDiagonal
                                                                    .title ===
                                                                    dg._id
                                                        )
                                                        .reduce(
                                                            (result, index) => {
                                                                const number =
                                                                    index ===
                                                                    true
                                                                        ? 1
                                                                        : 0;

                                                                return (
                                                                    result +
                                                                    number
                                                                );
                                                            },
                                                            0
                                                        )
                                                ) : (
                                                    dg.count
                                                )}
                                            </span>
                                            */}
                    </li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          )}
          {resolAgg && resolAgg.length > 0 && (
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<i className="fal fa-angle-down"></i>}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                Resolution
              </AccordionSummary>
              <AccordionDetails>
                <ul className="sidebar-options-container">
                  {resolAgg.map((rs, index) => (
                    <li key={index}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={forRes.includes(rs._id) ? true : false}
                            name={rs._id}
                            value={rs._id}
                            onClick={(e) => clickRes(e)}
                          />
                        }
                        label={rs._id.replace(/^0+/, "")}
                      />
                      {/*
                                            <span className='count-bullet'>
                                                {loading ? (
                                                    <Spinning />
                                                ) : parentFiltered.length >
                                                  0 ? (
                                                    parentFiltered
                                                        .map(
                                                            (cnt) =>
                                                                cnt.resolutionMax &&
                                                                cnt
                                                                    .resolutionMax
                                                                    .title ===
                                                                    rs._id
                                                        )
                                                        .reduce(
                                                            (result, index) => {
                                                                const number =
                                                                    index ===
                                                                    true
                                                                        ? 1
                                                                        : 0;

                                                                return (
                                                                    result +
                                                                    number
                                                                );
                                                            },
                                                            0
                                                        )
                                                ) : (
                                                    rs.count
                                                )}
                                            </span>
                                            */}
                    </li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          )}
          {brightAgg && brightAgg.length > 0 && (
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<i className="fal fa-angle-down"></i>}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                Brightness
              </AccordionSummary>
              <AccordionDetails>
                <ul className="sidebar-options-container">
                  {brightAgg.map((br, index) => (
                    <li key={index}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={forBright.includes(br._id) ? true : false}
                            name={br._id}
                            value={br._id}
                            onClick={(e) => clickBright(e)}
                          />
                        }
                        label={br._id.replace(/^0+/, "")}
                      />
                      {/*
                                            <span className='count-bullet'>
                                                {loading ? (
                                                    <Spinning />
                                                ) : parentFiltered.length >
                                                  0 ? (
                                                    parentFiltered
                                                        .map(
                                                            (cnt) =>
                                                                cnt.brightness &&
                                                                cnt.brightness
                                                                    .title ===
                                                                    br._id
                                                        )
                                                        .reduce(
                                                            (result, index) => {
                                                                const number =
                                                                    index ===
                                                                    true
                                                                        ? 1
                                                                        : 0;

                                                                return (
                                                                    result +
                                                                    number
                                                                );
                                                            },
                                                            0
                                                        )
                                                ) : (
                                                    br.count
                                                )}
                                            </span>
                                            */}
                    </li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          )}
          {interAgg && interAgg.length > 0 && (
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={<i className="fal fa-angle-down"></i>}
                aria-controls="panel5bh-content"
                id="panel5bh-header"
              >
                Interface
              </AccordionSummary>
              <AccordionDetails>
                <ul className="sidebar-options-container">
                  {interAgg.map((inter, index) => (
                    <li key={index}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={
                              forInter.includes(inter._id) ? true : false
                            }
                            name={inter._id}
                            value={inter._id}
                            onClick={(e) => clickInter(e)}
                          />
                        }
                        label={inter._id}
                      />
                      {/*
                                            <span className='count-bullet'>
                                                {loading ? (
                                                    <Spinning />
                                                ) : parentFiltered.length >
                                                  0 ? (
                                                    parentFiltered
                                                        .map(
                                                            (cnt) =>
                                                                cnt.interface &&
                                                                cnt.interface
                                                                    .map(
                                                                        (e) =>
                                                                            e.title ===
                                                                            inter._id
                                                                    )
                                                                    .reduce(
                                                                        (
                                                                            result,
                                                                            index
                                                                        ) => {
                                                                            const number =
                                                                                index ===
                                                                                true
                                                                                    ? 1
                                                                                    : 0;

                                                                            return (
                                                                                result +
                                                                                number
                                                                            );
                                                                        },
                                                                        0
                                                                    )
                                                        )
                                                        .reduce(
                                                            (result, index) =>
                                                                result + index
                                                        )
                                                ) : forInter.length === 0 ? (
                                                    inter.count
                                                ) : (
                                                    0
                                                )}
                                            </span>
                                            */}
                    </li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          )}
          {angleAgg && angleAgg.length > 0 && (
            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                expandIcon={<i className="fal fa-angle-down"></i>}
                aria-controls="panel6bh-content"
                id="panel6bh-header"
              >
                Viewing Angle
              </AccordionSummary>
              <AccordionDetails>
                <ul className="sidebar-options-container">
                  {angleAgg.map((ang, index) => (
                    <li key={index}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={forAngle.includes(ang._id) ? true : false}
                            name={ang._id}
                            value={ang._id}
                            onClick={(e) => clickAngle(e)}
                          />
                        }
                        label={ang._id.replace(/^0+/, "")}
                      />
                      {/*
                                            <span className='count-bullet'>
                                                {loading ? (
                                                    <Spinning />
                                                ) : parentFiltered.length >
                                                  0 ? (
                                                    parentFiltered
                                                        .map(
                                                            (cnt) =>
                                                                cnt.resolutionMax &&
                                                                cnt
                                                                    .resolutionMax
                                                                    .title ===
                                                                    ang._id
                                                        )
                                                        .reduce(
                                                            (result, index) => {
                                                                const number =
                                                                    index ===
                                                                    true
                                                                        ? 1
                                                                        : 0;

                                                                return (
                                                                    result +
                                                                    number
                                                                );
                                                            },
                                                            0
                                                        )
                                                ) : (
                                                    ang.count
                                                )}
                                            </span>
                                            */}
                    </li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          )}
          {temperAgg && temperAgg.length > 0 && (
            <Accordion
              expanded={expanded === "panel7"}
              onChange={handleChange("panel7")}
            >
              <AccordionSummary
                expandIcon={<i className="fal fa-angle-down"></i>}
                aria-controls="panel7bh-content"
                id="panel7bh-header"
              >
                Temperature
              </AccordionSummary>
              <AccordionDetails>
                <ul className="sidebar-options-container">
                  {temperAgg.map((tempRan, index) => (
                    <li key={index}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={
                              forTemp.includes(tempRan._id.title) ? true : false
                            }
                            name={tempRan._id.title}
                            value={tempRan._id.title}
                            onClick={(e) => clickTemp(e)}
                          />
                        }
                        label={tempRan._id.title.replace(/^0+/, "")}
                      />
                      {/*
                                            <span className='count-bullet'>
                                                {loading ? (
                                                    <Spinning />
                                                ) : parentFiltered.length >
                                                  0 ? (
                                                    parentFiltered
                                                        .map(
                                                            (cnt) =>
                                                                cnt.temperatureRange &&
                                                                cnt.temperatureRange
                                                                    .map(
                                                                        (e) =>
                                                                            e.title ===
                                                                            tempRan
                                                                                ._id
                                                                                .title
                                                                    )
                                                                    .reduce(
                                                                        (
                                                                            result,
                                                                            index
                                                                        ) => {
                                                                            const number =
                                                                                index ===
                                                                                true
                                                                                    ? 1
                                                                                    : 0;

                                                                            return (
                                                                                result +
                                                                                number
                                                                            );
                                                                        },
                                                                        0
                                                                    )
                                                        )
                                                        .reduce(
                                                            (result, index) =>
                                                                result + index
                                                        )
                                                ) : forTemp.length === 0 ? (
                                                    tempRan.count
                                                ) : (
                                                    0
                                                )}
                                            </span>
                                            */}
                    </li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          )}
          {touchAgg.length > 0 && (
            <Accordion
              expanded={expanded === "panel8"}
              onChange={handleChange("panel8")}
            >
              <AccordionSummary
                expandIcon={<i className="fal fa-angle-down"></i>}
                aria-controls="panel8bh-content"
                id="panel8bh-header"
              >
                Touch Screen
              </AccordionSummary>
              <AccordionDetails>
                <ul className="sidebar-options-container">
                  {touchAgg
                    .sort((a, b) => a - b)
                    .map((ts, index) => (
                      <li key={index}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={
                                forTouch.includes(`${ts._id}`) ? true : false
                              }
                              name={`${ts._id}`}
                              value={`${ts._id}`}
                              onClick={(e) => clickTouch(e)}
                            />
                          }
                          label={
                            ts._id === 0
                              ? "No"
                              : ts._id === 1
                              ? "Integrated"
                              : "Optional"
                          }
                        />
                        {/*
                                                <span className='count-bullet'>
                                                    {loading ? (
                                                        <Spinning />
                                                    ) : parentFiltered.length >
                                                      0 ? (
                                                        parentFiltered
                                                            .map(
                                                                (cnt) =>
                                                                    cnt.touch &&
                                                                    cnt.touch ===
                                                                        ts._id
                                                            )
                                                            .reduce(
                                                                (sum, index) =>
                                                                    sum + index
                                                            )
                                                    ) : (
                                                        ts.count
                                                    )}
                                                </span>
                                                */}
                      </li>
                    ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          )}
          {formatAgg.length > 0 && (
            <Accordion
              expanded={expanded === "panel9"}
              onChange={handleChange("panel9")}
            >
              <AccordionSummary
                expandIcon={<i className="fal fa-angle-down"></i>}
                aria-controls="panel9bh-content"
                id="panel9bh-header"
              >
                Format
              </AccordionSummary>
              <AccordionDetails>
                <ul className="sidebar-options-container">
                  {formatAgg
                    .sort((a, b) => a - b)
                    .map((fr, index) => (
                      <li key={index}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={
                                forFormat.includes(`${fr._id}`)
                                  ? true
                                  : false
                              }
                              name={`${fr._id}`}
                              value={`${fr._id}`}
                              onClick={(e) => clickFormat(e)}
                            />
                          }
                          label={fr._id}
                        />
                        {/*
                                                <span className='count-bullet'>
                                                    {loading ? (
                                                        <Spinning />
                                                    ) : parentFiltered.length >
                                                      0 ? (
                                                        parentFiltered
                                                            .map(
                                                                (cnt) =>
                                                                    cnt.touch &&
                                                                    cnt.touch ===
                                                                        ts._id
                                                            )
                                                            .reduce(
                                                                (sum, index) =>
                                                                    sum + index
                                                            )
                                                    ) : (
                                                        ts.count
                                                    )}
                                                </span>
                                                */}
                      </li>
                    ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          )}
          {powerAgg.length > 0 && (
            <Accordion
              expanded={expanded === "panel10"}
              onChange={handleChange("panel10")}
            >
              <AccordionSummary
                expandIcon={<i className="fal fa-angle-down"></i>}
                aria-controls="panel10bh-content"
                id="panel10bh-header"
              >
                Power Supply
              </AccordionSummary>
              <AccordionDetails>
                <ul className="sidebar-options-container">
                  {powerAgg
                    .sort((a, b) => a - b)
                    .map((fr, index) => (
                      <li key={index}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={
                                forPower.includes(`${fr._id}`) ? true : false
                              }
                              name={`${fr._id}`}
                              value={`${fr._id}`}
                              onClick={(e) => clickPower(e)}
                            />
                          }
                          label={fr._id}
                        />
                        {/*
                                                <span className='count-bullet'>
                                                    {loading ? (
                                                        <Spinning />
                                                    ) : parentFiltered.length >
                                                      0 ? (
                                                        parentFiltered
                                                            .map(
                                                                (cnt) =>
                                                                    cnt.touch &&
                                                                    cnt.touch ===
                                                                        ts._id
                                                            )
                                                            .reduce(
                                                                (sum, index) =>
                                                                    sum + index
                                                            )
                                                    ) : (
                                                        ts.count
                                                    )}
                                                </span>
                                                */}
                      </li>
                    ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          )}
          {sizeAgg.length > 0 && (
            <Accordion
              expanded={expanded === "panel11"}
              onChange={handleChange("panel11")}
            >
              <AccordionSummary
                expandIcon={<i className="fal fa-angle-down"></i>}
                aria-controls="panel11bh-content"
                id="panel11bh-header"
              >
                Diagonale
              </AccordionSummary>
              <AccordionDetails>
                <ul className="sidebar-options-container">
                  {sizeAgg
                    .sort((a, b) => a - b)
                    .map((fr, index) => (
                      <li key={index}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={
                                forSize.includes(`${fr._id}`)
                                  ? true
                                  : false
                              }
                              name={`${fr._id}`}
                              value={`${fr._id}`}
                              onClick={(e) => clickSize(e)}
                            />
                          }
                          label={fr._id}
                        />
                      </li>
                    ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          )}
          {contAgg.length > 0 && (
            <Accordion
              expanded={expanded === "panel12"}
              onChange={handleChange("panel12")}
            >
              <AccordionSummary
                expandIcon={<i className="fal fa-angle-down"></i>}
                aria-controls="panel12bh-content"
                id="panel12bh-header"
              >
                Controller
              </AccordionSummary>
              <AccordionDetails>
                <ul className="sidebar-options-container">
                  {contAgg
                    .sort((a, b) => a - b)
                    .map((fr, index) => (
                      <li key={index}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={
                                forCont.includes(`${fr._id}`)
                                  ? true
                                  : false
                              }
                              name={`${fr._id}`}
                              value={`${fr._id}`}
                              onClick={(e) => clickCont(e)}
                            />
                          }
                          label={fr._id}
                        />
                      </li>
                    ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          )}
          {optAgg.length > 0 && (
            <Accordion
              expanded={expanded === "panel13"}
              onChange={handleChange("panel13")}
            >
              <AccordionSummary
                expandIcon={<i className="fal fa-angle-down"></i>}
                aria-controls="panel13bh-content"
                id="panel13bh-header"
              >
                Options
              </AccordionSummary>
              <AccordionDetails>
                <ul className="sidebar-options-container">
                  {optAgg
                    .sort((a, b) => a - b)
                    .map((fr, index) => (
                      <li key={index}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={
                                forOpt.includes(`${fr._id}`)
                                  ? true
                                  : false
                              }
                              name={`${fr._id}`}
                              value={`${fr._id}`}
                              onClick={(e) => clickOpt(e)}
                            />
                          }
                          label={fr._id}
                        />
                      </li>
                    ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          )}
        </div>
      )}
    </div>
  );
};

// const delDuplicates = (array) => [...new Set(array)];

export default FiltersSidebar;
