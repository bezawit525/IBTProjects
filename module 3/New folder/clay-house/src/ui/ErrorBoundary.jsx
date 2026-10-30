import { Component } from 'react'
import ErrorMessage from './ErrorMessage.jsx'

// Catches errors thrown while rendering. Event handlers and async code need their own try/catch.
export default class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('Render error:', error, info.componentStack)
  }

  render() {
    if (this.state.error) {
      return (
        <ErrorMessage
          message="This page hit an unexpected problem. The rest of the shop still works."
          onRetry={() => this.setState({ error: null })}
        />
      )
    }
    return this.props.children
  }
}
