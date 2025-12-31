export const getAudienceBadge = (highlights: string[] | undefined) => {
  if (!highlights || highlights.length === 0) return null;

  const highlight = highlights[0].toLowerCase();

  if (highlight.includes('high school') || highlight.includes('student')) {
    return {
      text: 'High School',
      className: 'bg-blue-600 text-white border-blue-700',
      icon: '🎓'
    };
  } else if (highlight.includes('university') || highlight.includes('college')) {
    return {
      text: 'University',
      className: 'bg-purple-600 text-white border-purple-700',
      icon: '🏛️'
    };
  } else if (highlight.includes('executive') || highlight.includes('professional') || highlight.includes('corporate')) {
    return {
      text: 'Executive',
      className: 'bg-gray-700 text-white border-gray-800',
      icon: '💼'
    };
  }

  // Default for any other audience
  return {
    text: `${highlights[0]}`,
    className: 'bg-blue-600 text-white border-blue-700',
    icon: '🎓'
  };
}

/**
 * Replaces "Harvard University" and "Ivy League University" with "Ivy League" in text content
 * This is used to maintain consistency across the application
 */
export const replaceHarvardWithIvyLeague = (text: string | undefined | null): string => {
  if (!text) return '';
  // First replace "Ivy League University" to avoid double replacement
  let result = text.replace(/Ivy League University/gi, 'Ivy League');
  // Then replace "Harvard University"
  result = result.replace(/Harvard University/gi, 'Ivy League');
  return result;
}