import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS for styling
import branchdata from "./ContactUs.json"; // Assuming the coordinates are stored here
import Navbar from "../../../components/Navbar/Navbar";
import markerIconUrl from 'leaflet/dist/images/marker-icon.png'; // Import marker icon image
import "./ContactUs.css";

function ContactUs() {
    const [selectedBranch, setSelectedBranch] = useState(branchdata.branches[0]);
    const [branchDetails, setBranchDetails] = useState({
        address: "",
        phone: "",
        email: "",
        hours: "",
    });

    const mapContainerStyle = {
        width: "100%",
        height: "400px",
    };

    useEffect(() => {
        if (selectedBranch) {
            setBranchDetails({
                address: selectedBranch.address,
                phone: selectedBranch.phone,
                email: selectedBranch.email,
                hours: selectedBranch.hours,
            });
        }

        // Set the default marker icon using the imported image
        const defaultIcon = new L.Icon({
            iconUrl: markerIconUrl, // Use the imported image URL
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
        });
        L.Marker.prototype.options.icon = defaultIcon;
    }, [selectedBranch]);

    const handleBranchChange = (event) => {
        const selectedBranchId = event.target.value;
        const selectedBranch = branchdata.branches.find(
            (branch) => branch.id === selectedBranchId
        );
        setSelectedBranch(selectedBranch);
    };

    const scrolltoBranchSelector = () => {
        const BranchSelector = document.querySelector(".CU-info-section");
        if (BranchSelector) {
            BranchSelector.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Map view re-centering logic
    function CenterMap({ coordinates }) {
        const map = useMap();
        map.setView(coordinates, map.getZoom());
        return null;
    }

    return (
        <div className="Contact-Us">
            <Navbar />
            <div className="Contact-Us-Container">
                <div className="CU-header-container">
                    <div className="CU-header-context">
                        <h1>Contact Us</h1>
                        <p>Feel free to reach out to us regarding your concerns</p>
                        <button onClick={scrolltoBranchSelector}>Select a Branch</button>
                    </div>
                </div>

                <div className="CU-body-container">
                    <div className="CU-body-contents">
                        <div className="CU-maps-display">
                            <MapContainer
                                center={selectedBranch.coordinates}
                                zoom={17}
                                maxZoom={18}
                                style={mapContainerStyle}
                            >
                                {/* Using OpenStreetMap tiles directly */}
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                                />
                                <CenterMap coordinates={selectedBranch.coordinates} />
                                <Marker position={selectedBranch.coordinates}>
                                    <Popup>{selectedBranch.name}</Popup>
                                </Marker>
                            </MapContainer>
                        </div>

                        <div className="CU-info-section">
                            <div className="CU-branch-selector">
                                <h2>Select a Branch</h2>
                                <select
                                    className="branch-select"
                                    value={selectedBranch.id}
                                    onChange={handleBranchChange}
                                >
                                    {branchdata.branches.map((branch) => (
                                        <option key={branch.id} value={branch.id}>
                                            {branch.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="CU-branch-details">
                                <h2>Branch Information</h2>
                                <div className="branch-info">
                                    <div className="info-item">
                                        <i className="location-icon">📍</i>
                                        <p>{branchDetails.address}</p>
                                    </div>
                                    <div className="info-item">
                                        <i className="phone-icon">📞</i>
                                        <p>{branchDetails.phone}</p>
                                    </div>
                                    <div className="info-item">
                                        <i className="email-icon">✉️</i>
                                        <p>{branchDetails.email}</p>
                                    </div>
                                    <div className="info-item">
                                        <i className="time-icon">🕒</i>
                                        <p>{branchDetails.hours}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
