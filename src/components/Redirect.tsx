import React from "react";
import { Navigate, useParams } from "react-router-dom";

// Redirect component for old URLs to new Ivy League URLs
export const RedirectHarvardToIvyLeague: React.FC = () => {
    return <Navigate to="/ivy-league-future-ceo" replace />;
};

export const RedirectHarvardBooking: React.FC = () => {
    const { trainingCamp } = useParams<{ trainingCamp: string }>();
    return <Navigate to={`/ivy-league-future-ceo-booking/${trainingCamp}`} replace />;
};

export const RedirectHarvardSession: React.FC = () => {
    const { trainingCamp, sessionId } = useParams<{ trainingCamp: string; sessionId: string }>();
    return <Navigate to={`/ivy-league-future-ceo-booking/${trainingCamp}/session/${sessionId}`} replace />;
};

// Redirect component for harvard-negotiation-workshop to ivy-league-negotiation-workshop
export const RedirectHarvardNegotiationWorkshop: React.FC = () => {
    return <Navigate to="/programs/ivy-league-negotiation-workshop" replace />;
};

