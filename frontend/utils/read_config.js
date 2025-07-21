async function getConfigValue(key) {
  try {
    const response = await fetch('../../config.json');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const config = await response.json();
    return config[key];
  } catch (error) {
    console.error("Error fetching config:", error);
    return null;
  }
}
