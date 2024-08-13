import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

export default function Footer() {
  const { t } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <Box sx={{ backgroundColor: '#333', padding: '40px 20px 20px', textAlign: 'center', color: '#fff', direction: isArabic ? 'rtl' : 'ltr' }}>
      <Typography variant="body2">
        {t('footerText')} &copy; {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}
