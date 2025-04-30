export default function Loading() {
    return (
      <div className="fixed flex items-center justify-center top-0 left-0 bottom-0 right-0 z-50">
        <div className="w-40 h-40 border-20 border-primary-dark border-t-transparent border-dotted rounded-full animate-spin -z-40"></div>
        <div className="loading-backdrop z-30"></div>
      </div>
    );
  }
  