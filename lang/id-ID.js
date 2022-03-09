export default async (context, locale) => {
  return await Promise.resolve({
    Home: "Beranda",
    Market: "Pasar",
    Portfolio: "Portofolio",
    Discover: "Temukan",
    Account: "Akun",
    Settings: "Pengaturan",
    Current_Plan: "Rencana saat ini",
    Active_until: "Aktif sampai",
    Account_Setting: "Pengaturan Akun",
    Appearance: "Tampilan",
    Light: "Terang",
    Dark: "Gelap",
    System: "Sistem",
    Language: "Bahasa",
    Referral_Program: "Program Referal",
    Support: "Bantuan",
    FAQ: "FAQ",
    LogOut: "Keluar",
    info_scan:
      "Anda dapat melakukan scan QRCode di Indodax atau memasukan API dan secret key",
    api_key_required: "API key wajib diisi",
    secret_key_required: "Secret key wajib diisi",
  });
};
