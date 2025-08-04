const FeatureCard = ({ heading, description }: { heading: string, description: string }) => {
    return (
        <div>
            <h2 className="text-sm font-semibold pb-4">{heading}</h2>
            <p className="text-xs text-text/50 leading-6">{description}</p>
        </div>
    )
}

export default FeatureCard