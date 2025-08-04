import React from 'react'

const SocialButton = ({ icon }: { icon: React.ReactNode }) => {
    return (
        <div className="h-10 w-10 rounded-full border border-text/30 flex items-center justify-center">
            {icon}
        </div>
    )
}

export default SocialButton