import './LoadingSpinner.scss'
export const LoadingSpinner = ({isLoading, children}) => {
	return isLoading ? '... APP LOADING ...' : children
}