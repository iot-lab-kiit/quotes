import {useEffect} from "react";
import {useHistory,useParams} from 'react-router-dom';
import EditQuoteForm from "../components/quotes/EditQuoteForm";

import useHttp from "../hooks/use-http";
import {editQuote, getSingleQuote} from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";


const EditQuote = () => {
    
    const history = useHistory();
    const params = useParams();

    const { quoteId } = params;

    const { sendRequest, status, data:loadedQuote, error } = useHttp(getSingleQuote, true);
    const { sendRequest: sendEditRequest, status: editRequestStatus} = useHttp(editQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId])

    useEffect(() => {
        if (editRequestStatus === 'completed') {
            history.push(`/quotes/${quoteId}`);
        }
    }, [editRequestStatus, history]);

    if(status === 'pending'){
        return <div className='centered'>
            <LoadingSpinner />
        </div>
    }

    if(error){
        return <p className='centered focused'>{error}</p>
    }

    if (!loadedQuote.text) {
        return <p>No Quote Found!</p>;
    }

    const editQuoteHandler = quoteData => {
        console.log(quoteData)
        sendEditRequest({...quoteData, id: quoteId});
    }

    return <EditQuoteForm quoteData={loadedQuote} isLoading={status === 'pending'} onEditQuote={editQuoteHandler}/>
}

export default EditQuote;