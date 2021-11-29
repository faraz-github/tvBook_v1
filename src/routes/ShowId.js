import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

// Components
import Header from "../components/Header";
import Search from "../components/Search";
import Spinner from "../components/Spinner";

//CSS
import "../App.css";

// Main Function
function ShowId() {

    /////////////////////////////////////////// STATE
    const [showDetail, setshowDetail] = useState(null);

    /////////////////////////////////////////// REQUEST PARAMETER
    const id = useParams().id;

    /////////////////////////////////////////// API REQUEST

    async function fetchShowData(id) {

        const response = await axios.get("https://api.tvmaze.com/lookup/shows", {
            params: {
                imdb: id
            }
        });

        setshowDetail(response.data);

    }

    useEffect(() => {

        fetchShowData(id);

    }, [id]);

    /////////////////////////////////////////// RENDER
    return (

        <div className="ShowId container">

            <div className="row">

                <div className="col">
                    <Header />
                </div>

                <div className="col search-column">
                    <div className="float-end">
                        <Search />
                    </div>
                </div>

            </div>


            {(showDetail !== null)

                ? <div className="my-2 p-3 row justify-content-center">

                    <div className="col-xl-11 m-2 p-3 bg-white rounded shadow">

                        <div className="row">

                            <div className="col-xl-6 detail-card-left">

                                {(showDetail.image !== null)
                                    ? <img className="show-detail-image rounded border shadow-sm" src={showDetail.image.original} alt="poster" />
                                    : <img className="show-detail-image rounded border shadow-sm" src="https://picsum.photos/512/768" alt="poster" />
                                }

                            </div>

                            <div className="col-xl-6 detail-card-right">

                                {(showDetail.name)
                                    ? <h2 className="detail-show-title">{showDetail.name}</h2>
                                    : <h2 className="detail-show-title">Not Available</h2>
                                }

                                {(showDetail.language)
                                    ? <p className="d-inline"><b>Language: </b>{showDetail.language}</p>
                                    : <p className="d-inline"><b>Language: </b>Not Available</p>
                                }

                                <br />
                                {(showDetail.premiered)
                                    ? (showDetail.ended)
                                        ? <p className="d-inline"> <b>Timeline: </b>{showDetail.premiered.slice(0, 4)} to {showDetail.ended.slice(0, 4)} </p>
                                        : <p className="d-inline"> <b>Timeline: </b>{showDetail.premiered.slice(0, 4)} to Now</p>
                                    : <p className="d-inline"> <b>Timeline: </b>Not Available</p>
                                }

                                {(showDetail.genres.length)
                                    ? <p><b>Genres: </b>{showDetail.genres.join(", ")}</p>
                                    : <p><b>Genres: </b>Not Available</p>
                                }

                                {(showDetail.summary)
                                    ? <p><b>About The Show: </b>{showDetail.summary.replace(/<(.|\n)*?>/g, '')}</p> // Regex to remove al the html tags
                                    : <p><b>About The Show: </b>Not Available</p>
                                }

                                {(showDetail.rating.average)
                                    ? <p><b>Rating: </b>{showDetail.rating.average} / 10</p>
                                    : <p><b>Rating: </b>Not Available</p>
                                }

                                {(showDetail.averageRuntime)
                                    ? <p><b>Runtime: </b>{showDetail.averageRuntime} min</p>
                                    : <p><b>Runtime: </b>Not Available</p>
                                }

                                {(showDetail.officialSite)
                                    ? <a href={showDetail.officialSite}><button className="btn btn-dark">Official Website</button></a>
                                    : null
                                }

                            </div>

                        </div>

                    </div>

                </div>

                : <Spinner />

            }

        </div>

    )

}

export default ShowId;