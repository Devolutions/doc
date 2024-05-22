module.exports = (content, icon) => {
  const iconToClass = {
    badgeHelp: 'info',
    badgeInfo: 'info',
    shieldInfo: 'info',
    badgeNotice: 'notice',
    shieldNotice: 'notice',
    badgeCaution: 'caution',
    shieldCaution: 'caution',
    badgeWarning: 'warning',
    shieldWarning: 'warning'
  }

  const className = iconToClass[icon] || '';

  console.log(content, icon, className);
  return `<div class="snippet ${className}">${content}</div>`;
}