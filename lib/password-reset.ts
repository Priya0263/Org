// This is a simulated password reset service
// In a real application, this would connect to a database and email service

// Simulated token storage
// In a real app, this would be stored in a database with expiration times
const tokenStore: Record<string, { email: string; createdAt: number }> = {}

// Token expiration time (1 hour in milliseconds)
const TOKEN_EXPIRATION = 60 * 60 * 1000

/**
 * Generate a secure random token
 */
export function generateToken(): string {
  // In a real app, use a more secure method like crypto.randomBytes
  return (
    Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Date.now().toString(36)
  )
}

/**
 * Create a password reset token for a user
 */
export function createResetToken(email: string): string {
  // Clean up expired tokens
  cleanupExpiredTokens()

  // Generate a new token
  const token = generateToken()

  // Store the token with the email and creation time
  tokenStore[token] = {
    email,
    createdAt: Date.now(),
  }

  return token
}

/**
 * Verify if a reset token is valid
 */
export function verifyResetToken(token: string): { valid: boolean; email?: string } {
  // Clean up expired tokens
  cleanupExpiredTokens()

  const tokenData = tokenStore[token]

  if (!tokenData) {
    return { valid: false }
  }

  return {
    valid: true,
    email: tokenData.email,
  }
}

/**
 * Consume a reset token (mark it as used)
 */
export function consumeResetToken(token: string): boolean {
  if (tokenStore[token]) {
    delete tokenStore[token]
    return true
  }
  return false
}

/**
 * Clean up expired tokens
 */
function cleanupExpiredTokens(): void {
  const now = Date.now()

  Object.keys(tokenStore).forEach((token) => {
    if (now - tokenStore[token].createdAt > TOKEN_EXPIRATION) {
      delete tokenStore[token]
    }
  })
}

/**
 * Simulate sending a password reset email
 */
export function sendResetEmail(email: string, token: string): void {
  // In a real app, this would use an email service like SendGrid, Mailgun, etc.
  console.log(`
    To: ${email}
    Subject: Password Reset Request
    
    Hello,
    
    You recently requested to reset your password for your Organate account.
    Click the link below to reset it:
    
    https://organate.vercel.app/auth/reset-password?token=${token}
    
    This link will expire in 1 hour.
    
    If you did not request a password reset, please ignore this email.
    
    Best regards,
    The Organate Team
  `)
}

/**
 * Rate limiting for password reset requests
 * In a real app, this would be more sophisticated and persistent
 */
const rateLimitStore: Record<string, { count: number; firstRequest: number }> = {}

// Rate limit: 3 requests per hour
const RATE_LIMIT = 3
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour

export function checkRateLimit(identifier: string): boolean {
  const now = Date.now()

  // Clean up expired rate limits
  Object.keys(rateLimitStore).forEach((key) => {
    if (now - rateLimitStore[key].firstRequest > RATE_LIMIT_WINDOW) {
      delete rateLimitStore[key]
    }
  })

  // Check if the identifier exists in the store
  if (!rateLimitStore[identifier]) {
    rateLimitStore[identifier] = {
      count: 1,
      firstRequest: now,
    }
    return true
  }

  // Check if the rate limit window has expired
  if (now - rateLimitStore[identifier].firstRequest > RATE_LIMIT_WINDOW) {
    rateLimitStore[identifier] = {
      count: 1,
      firstRequest: now,
    }
    return true
  }

  // Check if the rate limit has been exceeded
  if (rateLimitStore[identifier].count >= RATE_LIMIT) {
    return false
  }

  // Increment the count
  rateLimitStore[identifier].count++
  return true
}
