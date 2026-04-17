import { Social } from "./Social"

export const Hero = () => {
    return (
        <>
            <div className='hero'></div>
            {/* Hero section */}
            <div className="container-fluid home">
                <div>
                <h2>Welcome to my page</h2>
                <h1>
                    Hi,<br />
                    I'm Fredy,<br />
                    <span className="typewrite" data-period="2000"></span>
                    <span className="wrap"></span>
                </h1>

                <a href="mailto:fmartinez.bpe@gmail.com">Contact me!</a>
                </div>
                <Social />
            </div> 
        </>
    )
}
