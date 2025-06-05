import { Calendar, MapPin, Clock, DollarSign } from "lucide-react"

export default function EventCard({ event, index }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":")
    const date = new Date()
    date.setHours(Number.parseInt(hours), Number.parseInt(minutes))
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }

  const getCategoryColor = (category) => {
    const colors = {
      Music: "bg-pink-100 text-pink-700 border-pink-200",
      Technology: "bg-blue-100 text-blue-700 border-blue-200",
      Food: "bg-orange-100 text-orange-700 border-orange-200",
      Adventure: "bg-green-100 text-green-700 border-green-200",
      Art: "bg-purple-100 text-purple-700 border-purple-200",
    }
    return colors[category] || "bg-gray-100 text-gray-700 border-gray-200"
  }

  return (
    <div
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-indigo-200 hover:-translate-y-2"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: "fadeInUp 0.6s ease-out forwards",
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={event.image || "/placeholder.svg?height=300&width=400"}
          alt={event.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(event.category)}`}>
            {event.category}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
          <div className="flex items-center gap-1 text-sm font-semibold text-gray-700">
            <DollarSign className="w-4 h-4" />
            {event.price}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
          {event.name}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">{event.description}</p>

        {/* Event Details */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium">{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium">{formatTime(event.time)}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium">{event.location}</span>
          </div>
        </div>

        {/* Register Button */}
        <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-200 shadow-lg hover:shadow-xl">
          Register Now
        </button>
      </div>
    </div>
  )
}
