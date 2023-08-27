import { useEffect, useState } from "react";
import { MoonLoader } from 'react-spinners';
import './components_style/loading.scss';

export function Loading() {

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, []);
  
    if (isLoading) {
      return (
        <div className="loading">
          <MoonLoader color="#DC3545" />
          <h2>Loading...</h2>
        </div>
      );
    }

    return(
          <>
          </>
    )
}