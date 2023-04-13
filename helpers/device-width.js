import {useCallback, useEffect, useState} from "react";

const useDeviceWidth = () => {
    const devices = {sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400};
    const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : null);

    const getDevice = useCallback(() => {
        switch (true) {
            case width >= devices.xxl:
                return "xxl";
            case width >= devices.xl:
                return "xl";
            case width >= devices.lg:
                return "lg";
            case width >= devices.md:
                return "md";
            case width >= devices.sm:
                return "sm";
        }
    }, [devices.lg, devices.md, devices.sm, devices.xl, devices.xxl, width]);

    const handleResize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return {devices, getDevice, width};
};

export default useDeviceWidth;