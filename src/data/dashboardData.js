export const navigationItems = [
  { name: 'Dashboard', key: 'dashboard' },
  { name: 'Reviews', key: 'reviews' },
  { name: 'Insights', key: 'insights' },
  { name: 'Alerts', key: 'alerts' },
  { name: 'Settings', key: 'settings' },
]

export const kpiCards = [
  {
    title: 'Total Reviews',
    value: '12,340',
    delta: '+8.4% from last week',
    trend: 'up',
  },
  {
    title: 'Average Rating',
    value: '4.2',
    delta: '+0.3 improvement',
    trend: 'up',
    suffix: '★',
  },
  {
    title: 'Sentiment Score',
    value: '78%',
    delta: '+5 pts in 14 days',
    trend: 'up',
  },
  {
    title: 'Negative Trend',
    value: '+12%',
    delta: '+2.1% this week',
    trend: 'down',
  },
]

export const sentimentTrend = [62, 64, 67, 65, 68, 70, 71, 69, 73, 76, 78, 79]

export const platformStats = [
  { platform: 'Amazon', avgRating: 3.9, negativePercent: 19 },
  { platform: 'Shopify', avgRating: 4.4, negativePercent: 11 },
  { platform: 'Walmart', avgRating: 4.1, negativePercent: 14 },
  { platform: 'Etsy', avgRating: 4.6, negativePercent: 8 },
]

export const urgentQueue = [
  {
    id: 1,
    text: 'Product arrived with a cracked lid and support has not replied in 3 days.',
    sentiment: 'Negative',
    tags: ['ProductQualityIssue', 'SupportEscalation'],
    priority: 'High',
    timestamp: '2 hours ago',
    platform: 'Amazon',
  },
  {
    id: 2,
    text: 'Shipping promised in 2 days, but package reached after 9 days.',
    sentiment: 'Negative',
    tags: ['ShippingDelay', 'ExpectationMismatch'],
    priority: 'High',
    timestamp: '4 hours ago',
    platform: 'Shopify',
  },
  {
    id: 3,
    text: 'Wrong color variant delivered and replacement workflow is confusing.',
    sentiment: 'Negative',
    tags: ['FulfillmentError', 'CXFriction'],
    priority: 'Medium',
    timestamp: '7 hours ago',
    platform: 'Walmart',
  },
]

export const recentReviews = [
  {
    id: 101,
    text: 'Great fit and premium feel. Packaging was excellent.',
    rating: 5,
    sentiment: 'Positive',
    tags: ['PackagingPraise', 'ProductDelight'],
    platform: 'Etsy',
  },
  {
    id: 102,
    text: 'Battery life is decent but charging cable stopped working quickly.',
    rating: 3,
    sentiment: 'Negative',
    tags: ['AccessoryFailure', 'DurabilityConcern'],
    platform: 'Amazon',
  },
  {
    id: 103,
    text: 'Easy checkout and arrived earlier than expected.',
    rating: 4,
    sentiment: 'Positive',
    tags: ['FastDelivery', 'CheckoutExperience'],
    platform: 'Shopify',
  },
  {
    id: 104,
    text: 'Looks good, but size chart is inaccurate for plus sizes.',
    rating: 2,
    sentiment: 'Negative',
    tags: ['SizingIssue', 'ListingClarity'],
    platform: 'Walmart',
  },
  {
    id: 105,
    text: 'Customer support solved my issue in under 15 minutes.',
    rating: 5,
    sentiment: 'Positive',
    tags: ['SupportPraise', 'QuickResolution'],
    platform: 'Amazon',
  },
]
