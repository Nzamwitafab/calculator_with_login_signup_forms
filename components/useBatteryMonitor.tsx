import { useEffect, useState } from 'react';
import * as Battery from 'expo-battery';
import { ToastAndroid } from 'react-native';
import { Audio } from 'expo-av';

const useBatteryMonitor = () => {
    const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
    const [sound, setSound] = useState<Audio.Sound>();

    useEffect(() => {
        const loadSound = async () => {
            const { sound } = await Audio.Sound.createAsync(
                require('../assets/ringtones/ringtone.mp3')  // Adjust the path as necessary
            );
            setSound(sound);
        };

        const updateBatteryLevel = async () => {
            const batteryState = await Battery.getBatteryStateAsync();
            const level = await Battery.getBatteryLevelAsync();

            // Set the battery level state
            setBatteryLevel(level * 100);  // Convert to percentage

            // Check if battery is charging and level reaches 90%
            if (batteryState === Battery.BatteryState.CHARGING && level >= 0.60) {
                ToastAndroid.show("Battery has reached 60%!", ToastAndroid.SHORT);

                // Play the sound
                if (sound) {
                    await sound.playAsync();
                }
            }
        };

        loadSound();  // Load the sound when the component mounts

        // Subscribe to battery level changes
        const subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
            updateBatteryLevel();
        });

        // Initial check
        updateBatteryLevel();

        return () => {
            subscription.remove();
            // Make sure to unload the sound to free up resources
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, [sound]);

    return batteryLevel;
};

export default useBatteryMonitor;
