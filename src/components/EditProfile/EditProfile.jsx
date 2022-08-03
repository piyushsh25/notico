import "./EditProfile.css"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editProfileHandler, userReducer } from "../../Hooks/slices/usersSlice"
export const EditProfile = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const userDetails = location?.state
    useEffect(() => {
        if (!userDetails) {
            navigate("/")
        }
    })
    const dispatch = useDispatch()
    const [fName, setFName] = useState(userDetails.firstName)
    const [lName, setLName] = useState(userDetails.lastName)
    const [bioData, setBioData] = useState(userDetails?.userBio?.bio)
    const [img, setImg] = useState(userDetails.img)
    const [portfolioLink, setPortfolioLink] = useState(userDetails?.userBio?.portfolio)
    async function editProfileTrigger(e, firstName, lastName, bioData, img, portfolioLink) {
        e.preventDefault()
        await dispatch(editProfileHandler({ firstName, lastName, bioData, img, portfolioLink }))
        navigate(`/user/${userDetails.username}`)
    }
    return <div className="container">
        <form id="contact">
            <h3>Editing profile....</h3>
            <h4>Please provide a proper link for the image. The image may not load if the link is broken.</h4>
            <fieldset>
                <input placeholder="first name" type="text" tabIndex="1" value={fName} onChange={(e) => setFName(e.target.value)} required autoFocus />
            </fieldset>
            <fieldset>
                <input placeholder="lasd name" type="text" tabIndex="2" value={lName} onChange={(e) => setLName(e.target.value)} required autoFocus />
            </fieldset>
            <fieldset>
                <input placeholder="bio" type="text" tabIndex="1" value={bioData} onChange={(e) => setBioData(e.target.value)} required autoFocus />
            </fieldset>
            <fieldset>
                <input placeholder="image link starts with http://" type="url" value={img} onChange={(e) => setImg(e.target.value)} tabIndex="4" required />
            </fieldset>
            <fieldset>
                <input placeholder="portfolio link starts with http://" type="url" value={portfolioLink} onChange={(e) => setPortfolioLink(e.target.value)} tabIndex="4" required />
            </fieldset>
            <fieldset>
                <button id="profile-submit" onClick={(e) => editProfileTrigger(e, fName, lName, bioData, img, portfolioLink)}>Submit</button>
            </fieldset>
        </form>


    </div>
}