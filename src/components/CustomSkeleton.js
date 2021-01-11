import React from 'react'
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton';

const CustomSkeleton = ({count,className}) => {
    return (
        <div className={className}>
            <SkeletonTheme color="rgb(235, 235, 235)" >
                <Skeleton count={count} />
            </SkeletonTheme>
        </div>
    )
}

export default CustomSkeleton
