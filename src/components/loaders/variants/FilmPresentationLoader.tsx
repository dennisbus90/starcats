import styled from "@emotion/styled";
import { SkeletonLoader } from "../skeletonLoader";
import { Section } from "../../../utils/styles/general";

const PillLoader = styled(SkeletonLoader)({
    display: 'inline-block',
    marginRight: '.5rem'
});

export const FilmPresentationLoader = () => {
    return (
        <>
            <Section margin="1rem 0">
                <SkeletonLoader width={50} height={40} />
            </Section>
            <Section margin="1rem 0">
                <SkeletonLoader width={400} height={40} />
            </Section>
            <Section margin="1rem 0">
                <SkeletonLoader width={500} height={160} />
            </Section>
            <Section margin="1rem 0">
                <PillLoader width={80} height={30} />
                <PillLoader width={100} height={30} />
            </Section>
        </ >
    );
};
