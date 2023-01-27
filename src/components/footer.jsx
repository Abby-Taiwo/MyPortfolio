import React from 'react'
import envelope from "../images/envelope.svg"
import github from "../images/github.svg"
import twitter from "../images/twitter.svg"
// import heart from "../images/heart.svg"
import '../styles/footer.css'



function footer() {
  return (
        <footer className="footer">

                    <div className="links">
                        <a href="https://twitter.com/AbidemiTaiwo18">
                            <img src={twitter}
                            alt="twitter icon"
                            />
                        </a>
                        <a href="https://github.com/Abby-Taiwo">
                            <img src={github}
                            alt="a github icon"
                            />
                        </a>
                        <a href="mailto:abidemitaiwo95@gmail.com">
                        <img src={envelope}
                        alt="email icon"
                        />
                        </a>
                    </div>
            <div className="author">
                Made by Abidemi Taiwo
            </div>
        </footer>
  )
}

export default footer
