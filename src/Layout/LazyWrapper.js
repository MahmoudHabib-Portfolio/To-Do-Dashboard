import { Suspense, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Preloader from "./Preloader";

export default function LazyWrapper({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            await new Promise(res => setTimeout(res, 3000));
            setLoading(false);
          }
          loadData();
    }, []);

    return(
        <>
            {loading ? (<Preloader />) : (
                <Suspense>
                {children}
            </Suspense>
            )}
        </>
    );
}

LazyWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};
