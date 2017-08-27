package com.vzs.myweb.configuration.auth;


import com.vzs.myweb.util.VzsStringUtils;
import org.apache.commons.codec.binary.Base64;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.spec.SecretKeySpec;
import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;


@Component
public class VzsSecurityManager {
    private static final Logger log = LoggerFactory.getLogger(VzsSecurityManager.class);

    public VzsSecurityManager() {
    }

    protected String refineEncryptedText(String encryptedText) {
        return encryptedText.replace(' ', '+');
    }

    public String decryptWithoutSalt(String encryptedText, String key) {
        try {
            encryptedText = this.refineEncryptedText(encryptedText);
            SecretKeySpec spec = this.getKeySpec(key);
            Cipher cipher = Cipher.getInstance("AES");
            cipher.init(2, spec);
            Base64 base64Encoder = new Base64();
            byte[] base64Decoded = base64Encoder.decode(encryptedText);
            log.debug("base64Decoded : {}", base64Decoded);
            String reversedBase64Decoded = new String(cipher.doFinal(base64Decoded), VzsSecurityConstant.CHARACTER_SET);
            String unreversedBase64Decoded = VzsStringUtils.reverse(reversedBase64Decoded);
            return new String(cipher.doFinal(base64Encoder.decode(unreversedBase64Decoded)), VzsSecurityConstant.CHARACTER_SET);
        } catch (NoSuchPaddingException | IllegalBlockSizeException | BadPaddingException | InvalidKeyException | NoSuchAlgorithmException var9) {
            throw new SecurityException(var9.getMessage(), var9);
        }
    }

    protected SecretKeySpec getKeySpec(String key) {
        byte[] keyBytes = new byte[0];

        try {
            keyBytes = key.getBytes("ASCII");
        } catch (UnsupportedEncodingException var4) {
            var4.printStackTrace();
        }

        return new SecretKeySpec(keyBytes, "AES");
    }

    static byte[] convertKeyToBytes(String key) {
        Base64 base64Encoder = new Base64();
        byte[] base64EncodedKeyBytes = base64Encoder.encode(key.getBytes(VzsSecurityConstant.CHARACTER_SET));
        return base64EncodedKeyBytes;
    }

    public String encryptWithoutSalt(String text, String key) {
        SecretKeySpec spec = this.getKeySpec(key);

        try {
            Cipher cipher = Cipher.getInstance("AES");
            cipher.init(1, spec);
            Base64 base64Encoder = new Base64();
            byte[] base64 = base64Encoder.encode(cipher.doFinal(text.getBytes(VzsSecurityConstant.CHARACTER_SET)));
            String base64Encoded = new String(base64, VzsSecurityConstant.CHARACTER_SET);
            String reversedEncrypted = VzsStringUtils.reverse(base64Encoded);
            byte[] encoded = base64Encoder.encode(cipher.doFinal(reversedEncrypted.getBytes(VzsSecurityConstant.CHARACTER_SET)));
            return new String(encoded, VzsSecurityConstant.CHARACTER_SET);
        } catch (NoSuchPaddingException | IllegalBlockSizeException | BadPaddingException | InvalidKeyException | NoSuchAlgorithmException var10) {
            throw new SecurityException(var10.getMessage(), var10);
        }
    }
}

