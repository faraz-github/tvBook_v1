import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

//Components
import Header from "../components/Header";
import Search from "../components/Search";
import Spinner from "../components/Spinner";

//CSS
import "../App.css";

// Main Function
function Shows() {

    /////////////////////////////////////////// STATE
    const [showsData, setshowsData] = useState([]);

    /////////////////////////////////////////// REQUEST PARAMETER
    const term = useParams().term;

    /////////////////////////////////////////// API REQUEST

    async function fetchShows(term) {

        const response = await axios.get("https://api.tvmaze.com/search/shows", {
            params: {
                q: term
            }
        });

        setshowsData(response.data);

    }

    useEffect(() => {

        fetchShows(term);

    }, [term]);

    /////////////////////////////////////////// RENDER
    return (

        <div className="Shows container">

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

            {(showsData.length !== 0)

                ? <div className="my-2 p-3 row justify-content-center">

                    {showsData.map((data, index) => {

                        return (

                            <div key={index} className="col-xl-5 m-2 p-3 bg-white rounded shadow">

                                <div className="row">

                                    <div className="col-xl-6 col-sm-12 card-left">

                                        {(data.show.image !== null)
                                            ? <img className="rounded border shadow-sm" src={data.show.image.medium} alt="poster" />
                                            : <img className="rounded border shadow-sm" src="https://picsum.photos/200/300" alt="poster" />
                                        }

                                    </div>

                                    <div className="col-xl-6 col-sm-12 card-right">

                                        {(data.show.name)
                                            ? <h3 className="show-title">{data.show.name}</h3>
                                            : <h3 className="show-title">Not Available</h3>
                                        }

                                        {(data.show.language)
                                            ? <p className="d-inline"><b>Language: </b>{data.show.language}</p>
                                            : <p className="d-inline"><b>Language: </b>Not Available</p>
                                        }
                                        <br />
                                        {(data.show.premiered)
                                            ? (data.show.ended)
                                                ? <p className="d-inline"> <b>Timeline: </b>{data.show.premiered.slice(0, 4)} to {data.show.ended.slice(0, 4)} </p>
                                                : <p className="d-inline"> <b>Timeline: </b>{data.show.premiered.slice(0, 4)} to Now</p>
                                            : <p className="d-inline"> <b>Timeline: </b>Not Available</p>
                                        }

                                        {(data.show.genres.length)
                                            ? <p><b>Genres: </b>{data.show.genres.join(", ")}</p>
                                            : <p><b>Genres: </b>Not Available</p>
                                        }


                                        {(data.show.externals.imdb)
                                            ? <Link to={`/show/${data.show.externals.imdb}`}>
                                                <button className="btn btn-info">Read More</button>
                                            </Link>
                                            : <p>More information is not available for this show...</p>
                                        }


                                    </div>

                                </div>

                            </div>

                        )

                    })}

                </div>

                : <Spinner />

            }

        </div>

    )
}

export default Shows;